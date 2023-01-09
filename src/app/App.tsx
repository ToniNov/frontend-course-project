import React, {useEffect, useRef} from 'react';
import {LoadingOverlay, MantineProvider, Notification} from "@mantine/core";
import {useAppDispatch, useAppSelector} from './store/store';
import { IconX } from '@tabler/icons';
import {
    selectColorScheme, selectErrorMessage, selectErrorTitle,
    selectIsSignedIn,
    selectToken
} from "../features/application/selectors";
import { useLazyAuthCheckQuery } from '../api/auth/authApi';
import {setError} from "../features/application/applicationSlice";
import {AppRouter} from "../routes/AppRouter";
import '../localization/i18n';

const HIDE_ERROR_DELAY = 5000;

const App =()=> {

    const dispatch = useAppDispatch();
    const [authCheck, { isFetching, isError }] = useLazyAuthCheckQuery();
    const colorScheme = useAppSelector(selectColorScheme);
    const isSignedIn = useAppSelector(selectIsSignedIn);
    const token = useAppSelector(selectToken);
    const errorTitle = useAppSelector(selectErrorTitle);
    const errorMessage = useAppSelector(selectErrorMessage);
    const timerId = useRef<ReturnType<typeof setTimeout>>();
    const isAppInitialized = !token || isSignedIn || isError;

    useEffect(() => {
        if (!isSignedIn && token) authCheck();
    }, [authCheck, isSignedIn, token]);

    useEffect(() => {
        if (errorTitle) {
            timerId.current = setTimeout(() => {
                dispatch(setError({ message: '', title: '' }));
            }, HIDE_ERROR_DELAY);
        }

        return () => {
            clearTimeout(timerId.current);
        };
    }, [dispatch, errorTitle]);

    const onErrorNotificationClose = (): void => {
        dispatch(setError({ message: '', title: '' }));
    };

    return (
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            <LoadingOverlay
                visible={isFetching}
                overlayBlur={2}
                loaderProps={{ variant: 'bars', size: 'lg' }}
            />
            {isAppInitialized && <AppRouter />}
            {errorTitle && (
                <Notification
                    p="sm"
                    style={{position: "fixed", bottom: "10px", right: "10px", zIndex: "10"}}
                    title={errorTitle}
                    icon={<IconX size={18} />}
                    color="red"
                    closeButtonProps={{ title: 'Hide notification' }}
                    onClose={onErrorNotificationClose}
                >
                    {errorMessage}
                </Notification>
            )}
        </MantineProvider>
    );
};

export default App;
