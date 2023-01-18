import { NavigateFunction } from 'react-router-dom';

import { UserAccessType } from "../../../../api/auth/types";
import { AppDispatch } from "../../../../app/store";

export type useAccessCheckArgsType = {
  userAccess: UserAccessType;
  navigate: NavigateFunction;
  dispatch: AppDispatch;
};
