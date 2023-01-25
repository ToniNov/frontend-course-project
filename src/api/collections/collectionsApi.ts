import {applicationApi} from "../applicationApi";
import {
    CollectionResponseType,
    CreateCollectionRequestType,
    CreateCollectionResponseType, DeleteCollectionRequestType,
    GetUserCollectionsResponseType,
    UpdateCollectionRequestBodyType,
    UpdateCollectionRequestParamType,
} from "./types";

export const collectionsApi = applicationApi.injectEndpoints({
    endpoints: builder => ({
        getCollection: builder.query<CollectionResponseType, { collectionId: string }>({
            query: ({ collectionId }) => ({
                url: `/collection/${collectionId}`,
            }),
        }),
        getUserCollections: builder.query<GetUserCollectionsResponseType, { userId: string }>(
            {
                query: ({ userId }) => ({
                    url: `/collection/user/${userId}`,
                }),
            },
        ),
        getTopics: builder.query<string[], void>({
            query: () => ({
                url: '/topics',
            }),
        }),
        createCollection: builder.mutation<
            CreateCollectionResponseType,
            CreateCollectionRequestType
            >({
            query: body => ({
                url: '/collection',
                method: 'POST',
                body,
            }),
            async onQueryStarted({ owner: ownerId }, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const { id, description, image, itemFields, owner, title, topics } = data;

                    dispatch(
                        collectionsApi.util.updateQueryData(
                            'getUserCollections',
                            { userId: ownerId },
                            draft => {
                                draft.push({
                                    description,
                                    id,
                                    image,
                                    itemFields,
                                    owner,
                                    title,
                                    topics,
                                });
                            },
                        ),
                    );
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        updateCollection: builder.mutation<
            void,
            UpdateCollectionRequestParamType & UpdateCollectionRequestBodyType
            >({
            query: ({ id, title, description, image, itemFields, topics }) => ({
                url: `/collection/${id}`,
                method: 'PATCH',
                body: { title, description, image, itemFields, topics },
            }),
            onQueryStarted(
                { owner, description, id, image, itemFields, title, topics },
                { dispatch, queryFulfilled },
            ) {
                const patchUserCollections = dispatch(
                    collectionsApi.util.updateQueryData(
                        'getUserCollections',
                        { userId: owner },
                        draft => {
                            const collectionToUpdate = draft.find(collection => collection.id === id);

                            if (collectionToUpdate)
                                Object.assign(collectionToUpdate, {
                                    description,
                                    image,
                                    itemFields,
                                    title,
                                    topics,
                                });
                        },
                    ),
                );
                const patchBiggestCollections = dispatch(
                    collectionsApi.util.updateQueryData(
                        'getPopularCollections',
                        undefined,
                        draft => {
                            const collectionToUpdate = draft.find(collection => collection.id === id);

                            if (collectionToUpdate)
                                Object.assign(collectionToUpdate, {
                                    description,
                                    image,
                                    itemFields,
                                    title,
                                    topics,
                                });
                        },
                    ),
                );

                queryFulfilled.catch(() => {
                    patchUserCollections.undo();
                    patchBiggestCollections.undo();
                });
            },
        }),
        deleteCollection: builder.mutation<void, DeleteCollectionRequestType>({
            query: body => ({
                url: `/collection/${body.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['BIGGESTCOLLECTIONS'],
            onQueryStarted({ id, userId }, { dispatch, queryFulfilled }) {
                const patch = dispatch(
                    collectionsApi.util.updateQueryData('getUserCollections', { userId }, draft => {
                        const index = draft.findIndex(collection => collection.id === id);

                        draft.splice(index, 1);
                    }),
                );

                queryFulfilled.catch(patch.undo);
            },
        }),
        getPopularCollections: builder.query<GetUserCollectionsResponseType, void>({
            query: () => ({
                url: '/collection/popular',
            }),
            providesTags: ['BIGGESTCOLLECTIONS'],
        }),
    }),
});

export const {
    useCreateCollectionMutation,
    useGetTopicsQuery,
    useGetUserCollectionsQuery,
    useDeleteCollectionMutation,
    useUpdateCollectionMutation,
    useLazyGetCollectionQuery,
    useGetPopularCollectionsQuery,
} = collectionsApi;