import { Dispatch, SetStateAction } from 'react';
import { FieldType } from '../../../../../../../api/collections/types';
import { GetCollectionItemsResponseType } from '../../../../../../../api/items/types';

export type PropsType = {
  collectionData: {
    collectionId: string;
    itemFields: FieldType[];
    owner: string;
  };
  paginationProps: {
    limit: number;
    page: number;
  };
  setPage: Dispatch<SetStateAction<number>>;
  selectedItemsProps: {
    selectedItemsIds: string[];
    setSelectedItemsIds: Dispatch<SetStateAction<string[]>>;
  };
  selectedTagsProps: {
    selectedTags: string[];
    setSelectedTags: Dispatch<SetStateAction<string[]>>;
  };
  collectionItemsData: GetCollectionItemsResponseType;
  tags: string[];
};

export type UseSuccessDeleteArgType = {
  isCollectionEmpty: boolean;
  isDeleteSuccess: boolean;
  page: number;
  resetDelete: () => void;
  setPage: Dispatch<SetStateAction<number>>;
  setSelectedItemsIds: Dispatch<SetStateAction<string[]>>;
};
