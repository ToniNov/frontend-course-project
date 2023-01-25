import {applicationApi} from "../applicationApi";

import { SearchByQueryRequestType, SearchByQueryResponseType } from '.';

export const searchApi = applicationApi.injectEndpoints({
  endpoints: builder => ({
    searchByQuery: builder.query<SearchByQueryResponseType, SearchByQueryRequestType>({
      query: params => ({
        url: `/search`,
        params,
      }),
    }),
  }),
});

export const { useLazySearchByQueryQuery } = searchApi;
