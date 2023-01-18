import { FC, useEffect } from 'react';
import {
    Anchor,
    Box,
    Button,
    Center,
    Checkbox, Divider,
    Group,
    LoadingOverlay,
    PasswordInput,
    Space, Stack,
    Text,
    TextInput,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import {useAppDispatch} from "../../../../app/store";
import {useSignInMutation} from "../../../../api/auth/authApi";
import {setRememberMe} from "../../../../features/application/applicationSlice";
import {LoginGoogle} from "./LoginGoogle/LoginGoogle";
import {LogInGithub} from "./LogInGithub/LogInGithub";
import {i18translateType} from "../../../../localization/type";

type PropsType = {
    setHasAccount: (val: boolean) => void;
    setOpened: (val: boolean) => void;
};

export const LoginForm: FC<PropsType> = ({ setHasAccount, setOpened }) => {
    const dispatch = useAppDispatch();
    const { t }: i18translateType  = useTranslation();
    const [signIn, { isSuccess, isLoading }] = useSignInMutation();

    const loginSchema = Yup.object().shape({
        email: Yup.string().email(t('error_email')).required(t('error_required')),
        password: Yup.string().min(6, t('error_password')).required(t('error_required')),
    });

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: yupResolver(loginSchema),
    });

    const { setValues } = form;

    useEffect(() => {
        if (isSuccess) {
            setOpened(false);
            setValues({
                email: '',
                password: '',
                rememberMe: false,
            });
        }
    }, [isSuccess, setOpened, setValues]);

    const onSignInSubmit = ({ email, password, rememberMe }: typeof form.values): void => {
        signIn({ email, password });
        dispatch(setRememberMe(rememberMe));
    };

    return (
        <Box mx="auto">
            <LoadingOverlay visible={isLoading} overlayBlur={2} />

            <form onSubmit={form.onSubmit(onSignInSubmit)}>

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

                <Group position="apart" mt="md" align="center" >
                    <Stack>
                        <Checkbox
                            label={t('label_rememberMe')}
                            {...form.getInputProps('rememberMe', { type: 'checkbox' })}
                        />
                        <Button type="submit">{t('button_signIn')}</Button>
                    </Stack>
                </Group>
            </form>

            <Divider label={t('divider_login_text')} labelPosition="center" my="lg" />

            <Group grow mb="md" mt="md">
                <LoginGoogle signIn={signIn} rememberMe={form.values.rememberMe} />
                <LogInGithub rememberMe={form.values.rememberMe} setOpened={setOpened} />
            </Group>

            <Space h="xl" />
            <Center>
                <Text>
                    {t('button_text_signUp')}
                    <Anchor
                        component="button"
                        type="button"
                        onClick={() => {
                            setHasAccount(false);
                        }}
                    >
                        {t('button_signUp')}
                    </Anchor>
                </Text>
            </Center>
        </Box>
    );
};
