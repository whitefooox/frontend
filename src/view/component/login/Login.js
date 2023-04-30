import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsAuthListener, useIsLoginStatusListener, useLoginDispatcher } from "../../../state/redux/api";
import AuthInput from "../authInput/AuthInput";
import AuthButton from "../authButton/AuthButton";
import classes from './Login.module.css';
import ErrorMessage from "../errorMessage/ErrorMessage";

function Login(props){

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const isAuth = useIsAuthListener();
    const loginUse = useLoginDispatcher();
    const isLoginStatus = useIsLoginStatusListener();

    useEffect(() => {
        if(isAuth){
            navigate('/main');
        }
    }, [isAuth, navigate])

    return (
        <div className={classes.login__form}>
            <AuthInput
                title="Login"
                type="text"
                getValue={setLogin}
            ></AuthInput>
            <AuthInput
                title="Password"
                type="password"
                getValue={setPassword}
            >
            </AuthInput>
            <AuthButton
                name="ok"
                onClick={() => loginUse(login, password)}
            ></AuthButton>
            {isLoginStatus === false && <ErrorMessage text="Error! Incorrect data :("></ErrorMessage>}
        </div>
    )
}

export default Login;