import { GetTagsResponseType } from ".";
import {applicationApi} from "../applicationApi";

export const tagsApi = applicationApi.injectEndpoints({
  endpoints: builder => ({
    getTags: builder.query<GetTagsResponseType, void>({
      query: () => ({
        url: '/tags',
      }),
      providesTags: ['TAGS'],
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;
