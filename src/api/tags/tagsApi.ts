import {applicationApi} from "../applicationApi";

export type GetTagsResponse = { value: string; count: number }[];

export const tagsApi = applicationApi.injectEndpoints({
  endpoints: builder => ({
    getTags: builder.query<GetTagsResponse, void>({
      query: () => ({
        url: '/tags',
      }),
      providesTags: ['TAGS'],
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;
