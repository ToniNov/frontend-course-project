import { FC, ReactElement } from 'react';

import { Navigate } from 'react-router-dom';
import { selectIsSignedIn } from '../../features/application/selectors';
import {AppRouterPath} from "../appRouterPath";
import {useAppSelector} from "../../app/store";


type Props = {
  children?: ReactElement;
};

export const AuthCheck: FC<Props> = ({ children }) => {
  const isSignedIn = useAppSelector(selectIsSignedIn);

  if (!isSignedIn) return <Navigate to={AppRouterPath.Main} />;

  return children || null;
};
