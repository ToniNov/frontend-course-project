import {useEffect, useState} from 'react';
import {
    ActionIcon,
    Button,
    Container,
    Group,
    Header,
    MediaQuery,
    Switch,
    Text,
} from '@mantine/core';
import {
    IconAlphabetCyrillic,
    IconAlphabetLatin,
    IconMoonStars,
    IconSearch,
    IconSun,
    IconTableOptions,
    IconUser,
} from '@tabler/icons';
import {useNavigate} from 'react-router-dom';

import {
    selectColorScheme,
    selectIsAdmin,
    selectIsDark,
    selectIsEnglish,
    selectIsSignedIn,
    selectUserId
} from '../../../features/application/selectors';
import {
    signOut,
    toggleColorScheme,
    toggleIsSearchOpen,
    toggleLocale
} from "../../../features/application/applicationSlice";
import {AppRouterPath} from "../../../routes/appRouterPath";
import {useAppDispatch, useAppSelector} from "../../../app/store/";
import {useTranslation} from "react-i18next";
import {GeneralModal} from "../../modal/GeneralModal";
import {GradientText} from "../Text/GradientText";
import {LoginForm} from "../Forms/LoginForm/LoginForm";
import { SignUpForm } from '../Forms/SignupForm/SignupForm';
import {SearchModal} from "../../modal/SearchModal";

export const AppHeader = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();
    const userId = useAppSelector(selectUserId);
    const isSignedIn = useAppSelector(selectIsSignedIn);
    const isDark = useAppSelector(selectIsDark);
    const colorScheme = useAppSelector(selectColorScheme);
    const isEnglish = useAppSelector(selectIsEnglish);
    const isAdmin = useAppSelector(selectIsAdmin);

    const [hasAccount, setHasAccount] = useState(true);
    const [isSignOpened, setIsSignOpened] = useState(false);

    useEffect(() => {
        i18n.changeLanguage(isEnglish ? 'en' : 'ru');
    }, [i18n, isEnglish]);

    return (
        <Header height={60} p="sm">
            <Container size="xl">
                <Group align="center" position="apart" noWrap>
                    <Group spacing="xl" align="center" position="left">

                        <ActionIcon
                            variant="transparent"
                            onClick={() => navigate(AppRouterPath.Main)}
                            title={t('button_title_homePage')}
                        >
                            <GradientText>
                                Reviews
                            </GradientText>
                        </ActionIcon>

                        {isSignedIn && (
                            <ActionIcon
                                variant="transparent"
                                onClick={() => navigate(`${AppRouterPath.User}/${userId}`)}
                                title={t('button_title_userPage')}
                                size={30}
                            >
                                <IconUser size={20}/>
                            </ActionIcon>
                        )}
                    </Group>

                    <Group spacing="xs" >

                        <Button
                            color={isDark ? 'gray' : 'dark'}
                            variant="default"
                            size="xs"
                            p={5}
                            onClick={() => {
                                dispatch(toggleIsSearchOpen());
                            }}
                        >
                            <Group position="right">
                                <IconSearch size={16} color="gray"/>
                                <MediaQuery smallerThan="xs" styles={{display: 'none'}}>
                                    <Text size={14} color="dimmed">
                                        {t('button_search')}
                                    </Text>
                                </MediaQuery>
                            </Group>
                        </Button>

                        <ActionIcon
                            variant="default"
                            onClick={() => dispatch(toggleLocale())}
                            title={t(isEnglish ? 'button_russian' : 'button_english')}
                            size={30}
                        >
                            {isEnglish ? (
                                <IconAlphabetCyrillic size={18}/>
                            ) : (
                                <IconAlphabetLatin size={18}/>
                            )}
                        </ActionIcon>
                        <Switch
                            color="gray"
                            checked={colorScheme === 'dark'}
                            onChange={() => dispatch(toggleColorScheme())}
                            size="lg"
                            onLabel={<IconSun color="Orange" size={20} stroke={1.5}/>}
                            offLabel={<IconMoonStars color="black" size={20} stroke={1.5}/>}
                        />
                        {isAdmin && (
                            <ActionIcon
                                variant="default"
                                onClick={() => navigate(AppRouterPath.Admin)}
                                size={30}
                                title={t('button_adminPanel')}
                            >
                                <IconTableOptions size={18} />
                            </ActionIcon>
                        )}
                        {isSignedIn ? (
                            <Button
                                variant="default"
                                color={isDark ? 'gray' : 'dark'}
                                size="xs"
                                p={5}
                                onClick={() => dispatch(signOut())}
                            >
                                {t('button_signOut')}
                            </Button>
                        ) : (
                            <Button
                                variant="default"
                                color={isDark ? 'gray' : 'dark'}
                                size="xs"
                                p={5}
                                onClick={() => setIsSignOpened(true)}
                            >
                                {t('button_signIn')}
                            </Button>
                        )}
                    </Group>
                </Group>
            </Container>
            <GeneralModal
                openedModal={isSignOpened}
                setOpenedModal={setIsSignOpened}
                title={t(hasAccount ? 'button_signIn' : 'title_signUp')}
            >
                {hasAccount ? (
                    <LoginForm setHasAccount={setHasAccount} setOpened={setIsSignOpened} />
                ) : (
                    <SignUpForm setHasAccount={setHasAccount} />
                )}
            </GeneralModal>
            <SearchModal />
        </Header>

    );
};

