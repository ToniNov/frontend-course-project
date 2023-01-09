import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { PropsType } from './types';
import {GeneralModal} from "../../../../common/modal/GeneralModal";
import { CollectionForm } from './components';



export const CollectionFormModal: FC<PropsType> = ({
  collectionForEdit,
  setOpenModal,
  openModal,
}) => {
  const { t } = useTranslation();

  return (
    <GeneralModal
      title={
        collectionForEdit
          ? t('modal_title_editCollection')
          : t('modal_title_createCollection')
      }
      setOpenedModal={setOpenModal}
      openedModal={openModal}
    >
      <CollectionForm setShowForm={setOpenModal} collection={collectionForEdit} />
    </GeneralModal>
  );
};
