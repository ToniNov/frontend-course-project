import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { PropsType } from './types';
import {GeneralModal} from "../../../../common/modal/GeneralModal";
import {CollectionForm} from "../../../User/components";

export const CollectionFormModal: FC<PropsType> = ({
  collectionForEdit,
  setIsModalOpen,
  isModalOpen,
}) => {
  const { t } = useTranslation();
  const modalTitle = collectionForEdit
    ? t('modal_title_editCollection')
    : t('modal_title_createCollection');

  return (
    <GeneralModal title={modalTitle} setOpenedModal={setIsModalOpen} openedModal={isModalOpen}>
      <CollectionForm setShowForm={setIsModalOpen} collection={collectionForEdit} />
    </GeneralModal>
  );
};
