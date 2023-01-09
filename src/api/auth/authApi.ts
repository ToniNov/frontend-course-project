import {applicationApi} from "../applicationApi";

import {
  AuthCheckResponseBodyType,
  GithubLoginRequestType,
  LoginRequestBodyType,
  LoginResponseBodyType,
  SignUpRequestBodyType,
} from './types';

export const authApi = applicationApi.injectEndpoints({
  endpoints: builder => ({
    authCheck: builder.query<AuthCheckResponseBodyType, void>({
      query: () => ({
        url: '/auth/check',
      }),
    }),
    signUp: builder.mutation<void, SignUpRequestBodyType>({
      query: body => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      }),
    }),
    signIn: builder.mutation<LoginResponseBodyType, LoginRequestBodyType>({
      query: body => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['USERS'],
    }),
    githubSignIn: builder.mutation<LoginResponseBodyType, GithubLoginRequestType>({
      query: body => ({
        url: 'auth/github',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useLazyAuthCheckQuery,
  useGithubSignInMutation,
} = authApi;
