import { FC } from 'react';

import { Modal } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../app/store';
import {selectIsSearchOpen} from "../../features/application/selectors";
import {toggleIsSearchOpen} from "../../features/application/applicationSlice";
import { Search } from '../components/AppHeader/Search';



export const SearchModal: FC = () => {
    const dispatch = useAppDispatch();
    const isSearchOpen = useAppSelector(selectIsSearchOpen);

    return (
        <Modal
            size="xl"
            withCloseButton={false}
            opened={isSearchOpen}
            onClose={() => {
                dispatch(toggleIsSearchOpen());
            }}
            padding={0}
            styles={{
                modal: {
                    maxWidth: '100%',
                },
            }}
        >
            <Search />
        </Modal>
    );
};
