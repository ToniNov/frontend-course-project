import { FC, useEffect } from 'react';

import {
    Anchor,
    Box,
    Button,
    Center,
    Group,
    LoadingOverlay,
    PasswordInput,
    Space,
    Text,
    TextInput,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import {useSignUpMutation} from "../../../../api/auth";
import {i18translateType} from "../../../../localization";

type PropsType = {
    setHasAccount: (val: boolean) => void;
};

const PASSWORD_LENGTH = 6;

export const SignUpForm: FC<PropsType> = ({ setHasAccount }) => {

    const { t }: i18translateType = useTranslation();
    const [signUp, { isSuccess, isLoading }] = useSignUpMutation();

    const signUpSchema = Yup.object().shape({
        name: Yup.string().required(t('error_required')),
        email: Yup.string().email(t('error_email')).required(t('error_required')),
        password: Yup.string()
            .min(PASSWORD_LENGTH, t('error_password'))
            .required(t('error_required')),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], t('error_confirm_password'))
            .required(t('error_required')),
    });

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

        validate: yupResolver(signUpSchema),
    });

    useEffect(() => {
        if (isSuccess) {
            setHasAccount(true);
        }
    }, [form, isSuccess, setHasAccount]);

    const onSignUpSubmit = ({ email, name, password }: typeof form.values): void => {
        signUp({ email, name, password });
    };

    return (
        <Box mx="auto">
            <LoadingOverlay visible={isLoading} overlayBlur={2} />
            <form onSubmit={form.onSubmit(onSignUpSubmit)}>
                <TextInput
                    label={t('label_name')}
                    placeholder={t('placeholder_name')}
                    {...form.getInputProps('name')}
                />
                <TextInput
                    label={t('label_email')}
                    placeholder="hello@email.dev"
                    {...form.getInputProps('email')}
                />
                <PasswordInput
                    label={t('label_password')}
                    placeholder={t('placeholder_password')}
                    {...form.getInputProps('password')}
                />

                <PasswordInput
                    label={t('label_confirm_password')}
                    placeholder={t('placeholder_password')}
                    {...form.getInputProps('confirmPassword')}
                />

                <Group position="right" mt="md">
                    <Button type="submit">{t('button_signUp')}</Button>
                </Group>
            </form>
            <Space h="xl" />
            <Center>
                <Text>
                    <Anchor
                        component="button"
                        type="button"
                        onClick={() => {
                            setHasAccount(true);
                        }}
                    >
                        {t('button_signIn')}
                    </Anchor>{' '}
                    {t('button_text_signIn')}
                </Text>
            </Center>
        </Box>
    );
};
