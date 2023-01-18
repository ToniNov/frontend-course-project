import { FC, useEffect } from 'react';

import { ActionIcon, Button, Group } from '@mantine/core';
import { IconLock, IconLockOpen } from '@tabler/icons';
import { useTranslation } from 'react-i18next';

import { useSelfBlockOrAccessDowngrade, useSelfDelete } from './hooks';
import { PropsType } from './types';
import {i18translateType} from "../../../../localization/type";
import {useDeleteUsersMutation, useUpdateUsersMutation} from '../../../../api/users';
import { useAppDispatch, useAppSelector } from '../../../../app/store';
import {selectUserId} from "../../../../features/application/selectors";
import {Status} from "../../../../common/enum/status";
import {Access} from "../../../../common/enum/access";


export const UsersTableToolbar: FC<PropsType> = ({
  selectedUsersIds,
  pageProps: { limit, page },
  setSelectedUserIds,
}) => {
  const { t } : i18translateType = useTranslation();
  const [
    updateUsers,
    { data: usersData, isLoading: isUpdateLoading, isSuccess: isUpdateSuccess },
  ] = useUpdateUsersMutation();

  const [deleteUsers, { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess }] =
    useDeleteUsersMutation();
  const dispatch = useAppDispatch();
  const signedInUserId = useAppSelector(selectUserId);
  const isDisabled = selectedUsersIds.length === 0 || isUpdateLoading || isDeleteLoading;

  useEffect(() => {
    if (isDeleteSuccess) {
      setSelectedUserIds([]);
    }
  }, [dispatch, isDeleteSuccess, setSelectedUserIds, signedInUserId]);

  useSelfDelete({
    dispatch,
    isDeleteSuccess,
    signedInUserId,
    selectedUsersIds,
  });

  useSelfBlockOrAccessDowngrade({
    dispatch,
    isUpdateSuccess,
    signedInUserId,
    selectedUsersIds,
    usersData,
  });

  const onBlockUsersClick = (): void => {
    updateUsers({
      userIds: selectedUsersIds,
      update: { status: Status.Block },
      pageInfo: { limit, page },
    });
  };

  const onUnblockUsersClick = (): void => {
    updateUsers({
      userIds: selectedUsersIds,
      update: { status: Status.Active },
      pageInfo: { limit, page },
    });
  };

  const onAdminUsersClick = (): void => {
    updateUsers({
      userIds: selectedUsersIds,
      update: { access: Access.Admin },
      pageInfo: { limit, page },
    });
  };

  const onBasicUsersClick = (): void => {
    updateUsers({
      userIds: selectedUsersIds,
      update: { access: Access.Basic },
      pageInfo: { limit, page },
    });
  };

  const onDeleteUsersClick = (): void => {
    deleteUsers({ userIds: selectedUsersIds, limit, page });
  };

  return (
    <Group spacing="xs">
      <ActionIcon
        variant="filled"
        title={t('button_title_blockUser')}
        color="orange"
        size={30}
        disabled={isDisabled}
        onClick={onBlockUsersClick}
      >
        <IconLock size={18} />
      </ActionIcon>
      <ActionIcon
        variant="filled"
        title={t('button_title_unBlockUser')}
        color="green"
        size={30}
        disabled={isDisabled}
        onClick={onUnblockUsersClick}
      >
        <IconLockOpen size={18} />
      </ActionIcon>

      <Button
        variant="filled"
        size="xs"
        title={t('button_title_adminRights')}
        color="yellow"
        disabled={isDisabled}
        onClick={onAdminUsersClick}
      >
        {t('button_text_admin')}
      </Button>

      <Button
        variant="default"
        size="xs"
        title={t('button_title_basicRights')}
        disabled={isDisabled}
        onClick={onBasicUsersClick}
      >
        {t('button_text_basic')}
      </Button>
      <Button
        variant="filled"
        color="red"
        size="xs"
        disabled={isDisabled}
        onClick={onDeleteUsersClick}
      >
        {t('button_text_delete')}
      </Button>
    </Group>
  );
};
