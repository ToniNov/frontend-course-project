import {applicationApi} from "../applicationApi";

import {
  DeleteUsersRequestBodyType,
  GetAllUsersRequestQueryType,
  GetAllUsersResponseBodyType,
  UpdateUsersRequestBodyType,
  UpdateUsersResponseBodyType,
} from '.';

export const usersApi = applicationApi.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<GetAllUsersResponseBodyType, GetAllUsersRequestQueryType>({
      query: params => ({
        url: '/users',
        params,
      }),
      providesTags: ['USERS'],
    }),
    getUserName: builder.query<{ name: string }, { id: string }>({
      query: ({ id }) => ({
        url: `/users/${id}`,
      }),
    }),
    updateUsers: builder.mutation<
      UpdateUsersResponseBodyType,
      UpdateUsersRequestBodyType
    >({
      query: body => ({
        url: '/users',
        method: 'PUT',
        body,
      }),
      async onQueryStarted({ pageInfo, update, userIds }, { dispatch, queryFulfilled }) {
        const { limit, page } = pageInfo;

        dispatch(
          usersApi.util.updateQueryData('getUsers', { limit, page }, draft => {
            draft.users.forEach(user => {
              if (userIds.includes(user.id)) Object.assign(user, update);
            });
          }),
        );

        queryFulfilled.catch(() => {
          dispatch(applicationApi.util.invalidateTags(['USERS']));
        });
      },
    }),
    deleteUsers: builder.mutation<void, DeleteUsersRequestBodyType>({
      query: body => ({
        url: '/users',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['USERS'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUsersMutation,
  useUpdateUsersMutation,
  useLazyGetUserNameQuery,
} = usersApi;
