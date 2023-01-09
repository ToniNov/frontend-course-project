import { Dispatch, SetStateAction } from 'react';
import { FieldType } from '../../../../../../../../../api/collections/types';


export type PropsType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;

  itemProps: {
    itemId: string | undefined;
    collectionData: {
      collectionId: string;
      itemFields: FieldType[];
    };
    paginationProps: {
      limit: number;
      page: number;
    };
    tags: string[];
  };
};
