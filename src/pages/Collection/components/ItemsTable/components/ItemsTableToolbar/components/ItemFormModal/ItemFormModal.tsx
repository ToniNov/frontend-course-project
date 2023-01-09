import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { ItemForm } from '../ItemForm';

import { PropsType } from './types';
import {GeneralModal} from "../../../../../../../../common/modal/GeneralModal";


export const ItemFormModal: FC<PropsType> = ({
  isModalOpen,
  setIsModalOpen,
  itemProps,
}) => {
  const { t } = useTranslation();
  const { itemId } = itemProps;

  return (
    <GeneralModal
      openedModal={isModalOpen}
      setOpenedModal={setIsModalOpen}
      title={itemId ? t('modal_title_editItem') : t('modal_title_addItem')}
    >
      <ItemForm setShowForm={setIsModalOpen} itemProps={itemProps} />
    </GeneralModal>
  );
};
