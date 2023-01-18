import { useEffect } from 'react';

import { useAccessCheckArgsType } from './types';

import {AppRouterPath} from "../../../routes/appRouterPath";
import { setError } from '../../../features/application/applicationSlice';
import i18n from '../../../localization/i18n';
import {Access} from "../../../common/enum/access";

export const useAccessCheck = ({
  navigate,
  dispatch,
  userAccess,
}: useAccessCheckArgsType): void => {
  useEffect(() => {
    if (userAccess === Access.Basic) {
      navigate(AppRouterPath.Main);
      dispatch(
        setError({
          title: i18n.t('error_title_userAccess'),
          message: i18n.t('error_message_userAccess'),
        }),
      );
    }
  }, [dispatch, navigate, userAccess]);
};
