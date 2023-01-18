import {FC, useEffect} from 'react';
import LoginGithub from 'react-login-github';
import {useAppDispatch} from "../../../../../app/store";
import {useGithubSignInMutation} from '../../../../../api/auth/authApi';
import {setRememberMe} from "../../../../../features/application/applicationSlice";
import {GithubIcon} from "../../../SocialButtons/GithubIcon";

const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;

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

        console.log(code)

        githubSignIn({ code });
    };

    const onFailure = (response: any): void => console.error(response);

    return (
        <LoginGithub
            clientId={CLIENT_ID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            scope="user:email"
            type="button"
        >
            <GithubIcon/>
        </LoginGithub>
    );
};
