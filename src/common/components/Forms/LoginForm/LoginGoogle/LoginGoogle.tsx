import { FC, useEffect } from 'react';
import { ActionIcon } from '@mantine/core';
import { gapi } from 'gapi-script';
import {useAppDispatch} from "../../../../../app/store/store";
import {setRememberMe} from '../../../../../features/application/applicationSlice';
import GoogleLogin from 'react-google-login';
import {GoogleIcon} from "../../../SocialButtons/GoogleIcon";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID!;

type PropsType = {
  signIn: any;
  rememberMe: boolean;
};

export const LoginGoogle: FC<PropsType> = ({ signIn, rememberMe }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initClient = (): void => {
      gapi.client.init({
        clientId,
        scope: '',
      });
    };

    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res: any): void => {
    const googleData = {
      name: res.profileObj.name,
    };
    const body = { email: res.profileObj.email, googleData, password: res.tokenId };

    signIn(body);
    dispatch(setRememberMe(rememberMe));
  };
  const onFailure = (err: any): void => {
    console.warn('failed:', err);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      render={renderProps => (
        <ActionIcon
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          variant="default"
          title="Google"
        >
          <GoogleIcon>Google</GoogleIcon>
        </ActionIcon>
      )}
    />
  );
};
