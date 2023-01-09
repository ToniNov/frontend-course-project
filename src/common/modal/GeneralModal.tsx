import { Modal } from '@mantine/core';
import {FC, ReactNode} from "react";

type GeneralModalPropsType = {
    openedModal: boolean
    children: ReactNode
    setOpenedModal: (value: boolean) => void
    title: string
}

export const GeneralModal: FC<GeneralModalPropsType> = ({openedModal, setOpenedModal, children, title}) => {
    return (

        <Modal centered
               opened={openedModal}
               onClose={() => setOpenedModal(false)}
               title={title}>
            {children}
        </Modal>

    );
}