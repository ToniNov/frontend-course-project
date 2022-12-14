import { Dispatch, SetStateAction } from 'react';

import { SortSettingsType } from '../../../types';
import {GetCollectionItemsResponseType} from "../../../../../../../api/items/types";

export type PropsType = {
  isOwnerOrAdmin: boolean;
  collectionItems: GetCollectionItemsResponseType;
  selectedItemsProps: {
    selectedItemsIds: string[];
    setSelectedItemsIds: Dispatch<SetStateAction<string[]>>;
  };
  paginationProps: {
    limit: number;
    page: number;
  };
  selectedTags: string[];
  sortSettings: SortSettingsType;
};
