import { Dispatch, SetStateAction } from 'react';
import {SortSettingsType} from "../../../../../types";
import {FieldTypesType} from "../../../../../../../../../api/collections/types";

export type PropsType = {
  sortSettings: SortSettingsType;
  setSortSettings: Dispatch<SetStateAction<SortSettingsType>>;
  fieldTitle: string;
  fieldType: FieldTypesType;
};
