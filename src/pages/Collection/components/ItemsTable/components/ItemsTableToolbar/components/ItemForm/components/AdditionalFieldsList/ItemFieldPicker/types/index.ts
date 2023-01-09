import {FieldType} from "../../../../../../../../../../../../api/collections/types";

export type PropsType = {
  field: FieldType;
  value: any;
  onChange: (...event: any[]) => void;
  error: string | undefined;
};
