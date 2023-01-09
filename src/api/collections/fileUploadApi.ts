import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const CLOUD_API_KEY="1c2e537122705b492ac47ea2c01b4aa5"

export const fileUploadApi = createApi({
  reducerPath: 'fileUploadApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_CLOUD_URL,
  }),
  endpoints: builder => ({
    uploadImage: builder.mutation<any, FormData>({
      query: body => ({
        url: `upload?expiration=600&key=${CLOUD_API_KEY}`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = fileUploadApi;
