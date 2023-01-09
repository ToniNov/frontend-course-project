import {FC, useEffect} from 'react';
import LoginGithub from 'react-login-github';
import {useAppDispatch} from "../../../../../app/store/store";
import {useGithubSignInMutation} from '../../../../../api/auth/authApi';
import {setRememberMe} from "../../../../../features/application/applicationSlice";
import {GithubButton} from "../../../SocialButtons/SocialButtons";
import {GithubIcon} from "../../../SocialButtons/GithubIcon";

const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;

type PropsType = {
    rememberMe: boolean;
    setOpened: (val: boolean) => void;
};

export const LogInGithub: FC<PropsType> = ({ rememberMe, setOpened }) => {
    const dispatch = useAppDispatch();
    const [githubSignIn, { isSuccess }] = useGithubSignInMutation();

    useEffect(() => {
        if (isSuccess) {
            dispatch(setRememberMe(rememberMe));
            setOpened(false);
        }
    }, [dispatch, isSuccess, rememberMe, setOpened]);

    const onSuccess = ({ code }: any): void => {
        githubSignIn({ code });
    };
    const onFailure = (response: any): void => console.error(response);

    return (
        <LoginGithub
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            scope="user:email"
            buttonText='Github'
        >
            <GithubIcon/>
        </LoginGithub>
    );
};
