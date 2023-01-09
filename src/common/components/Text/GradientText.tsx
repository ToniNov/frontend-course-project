import { Text } from '@mantine/core';
import {FC, ReactNode} from "react";

type GradientTextPropsType = {
    children: ReactNode
}

export const GradientText: FC<GradientTextPropsType> =({children}) => {
    return (
        <Text
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
            ta="center"
            fz="xl"
            fw={700}
        >
            {children}
        </Text>
    );
}