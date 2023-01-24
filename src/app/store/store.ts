import { configureStore } from '@reduxjs/toolkit';
import { throttle } from 'lodash';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import {applicationApi} from "../../api/applicationApi";
import {appReducer} from "../../features/application/applicationSlice";
import {loadState, saveItem} from "../../common/utils/storage";
import { fileUploadApi } from '../../api/collections/fileUploadApi';
import { errorMiddleware } from './errorMiddleware';

const SAVE_THROTTLE = 1000;

const preloadedState = loadState();

export const store = configureStore({
    reducer: {
        [applicationApi.reducerPath]: applicationApi.reducer,
        [fileUploadApi.reducerPath]: fileUploadApi.reducer,
        app: appReducer,
    },
    preloadedState,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(applicationApi.middleware)
            .concat(fileUploadApi.middleware)
            .concat(errorMiddleware),
});

store.subscribe(
    throttle(() => {
        saveItem('colorScheme', store.getState().app.colorScheme, true);
        saveItem('locale', store.getState().app.locale, true);
        saveItem(
            'token',
            store.getState().app.userData.token,
            store.getState().app.userData.rememberMe,
        );
    }, SAVE_THROTTLE),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;