import { ChangeEventHandler, FC } from 'react';

import { Checkbox } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { SortButton } from './components';
import { PropsType } from './types';
import {i18translateType} from "../../../../../../localization";

export const ItemsTableHead: FC<PropsType> = ({
  itemFields,
  collectionItemsData,
  selectedItemsProps: { selectedItemsIds, setSelectedItemsIds },
  sortSettingsProps: { setSortSettings, sortSettings },
  isOwnerOrAdmin,
}) => {
  const { t }: i18translateType = useTranslation();
  const areAllItemsSelected = collectionItemsData.items.every(({ id }) =>
    selectedItemsIds.includes(id),
  );

  const onItemsChange: ChangeEventHandler<HTMLInputElement> = e => {
    if (e.currentTarget.checked) {
      setSelectedItemsIds(collectionItemsData.items.map(({ id }) => id));

      return;
    }
    setSelectedItemsIds(
      selectedItemsIds.filter(selectedItemId =>
        collectionItemsData.items.every(({ id }) => id !== selectedItemId),
      ),
    );
  };

  return (
    <tr>
      {isOwnerOrAdmin && (
        <th>
          <Checkbox
            size="xs"
            onChange={onItemsChange}
            checked={areAllItemsSelected}
            title={t('button_title_toggleAll')}
          />
        </th>
      )}

      <th>#</th>
      <th>Id</th>
      <th>
        <SortButton
          sortSettings={sortSettings}
          setSortSettings={setSortSettings}
          fieldTitle="title"
          fieldType="text"
        />
      </th>

      {itemFields.map(({ title, type }) => (
        <th key={title}>
          <SortButton
            sortSettings={sortSettings}
            setSortSettings={setSortSettings}
            fieldTitle={title}
            fieldType={type}
          />
        </th>
      ))}

      <th>{t('label_tags')}</th>
    </tr>
  );
};
