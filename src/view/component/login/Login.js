import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LabelInput from "../labelInput/LabelInput";
import Button from "../button/Button";
import classes from './Login.module.css';
import ErrorMessage from "../errorMessage/ErrorMessage";
import { useListenerIsAuth, useListenerIsLoginStatus, useLogin } from "../../../state/redux/api/apiUser";

function Login(props){

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const isAuth = useListenerIsAuth();
    const isLoginStatus = useListenerIsLoginStatus();
    const loginUse = useLogin();

    useEffect(() => {
        if(isAuth){
            navigate('/main');
        }
    }, [isAuth, navigate])

    return (
        <div className={classes.login__form}>
            <LabelInput
                title="Login"
                type="text"
                getValue={setLogin}
            ></LabelInput>
            <LabelInput
                title="Password"
                type="password"
                getValue={setPassword}
            >
            </LabelInput>
            <Button
                name="ok"
                onClick={() => loginUse(login, password)}
            ></Button>
            {isLoginStatus === false && <ErrorMessage text="Error! Incorrect data :("></ErrorMessage>}
        </div>
    )
}

export default Login;