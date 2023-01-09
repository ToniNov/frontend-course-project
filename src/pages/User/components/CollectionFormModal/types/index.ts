import { Dispatch, SetStateAction } from 'react';
import {CollectionType} from "../../../../../api/collections/types";

export type PropsType = {
  collectionForEdit: CollectionType | null;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
};
