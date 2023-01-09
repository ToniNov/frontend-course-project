import {applicationApi} from "../applicationApi";

import { SearchByQueryRequest, SearchByQueryResponse } from './types';

export const searchApi = applicationApi.injectEndpoints({
  endpoints: builder => ({
    searchByQuery: builder.query<SearchByQueryResponse, SearchByQueryRequest>({
      query: params => ({
        url: `/search`,
        params,
      }),
    }),
  }),
});

export const { useLazySearchByQueryQuery } = searchApi;
