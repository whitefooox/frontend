import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthInput from "../authInput/AuthInput";
import AuthButton from "../authButton/AuthButton";
import classes from './Registration.module.css';
import { useIsAuthListener, useIsRegistrationStatusListener, useRegistrationDispatcher } from "../../../state/redux/api";
import ErrorMessage from "../errorMessage/ErrorMessage";

function Registration(props){

    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const isAuth = useIsAuthListener();
    const registrationUse = useRegistrationDispatcher();
    const isRegistrationStatus = useIsRegistrationStatusListener();

    useEffect(() => {
        if(isAuth){
            navigate('/main');
        }
    }, [isAuth, navigate]);

    return (
        <div className={classes.registration__form}>
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
            <AuthInput
                title="Email"
                type="email"
                getValue={setEmail}
            ></AuthInput>
            <AuthButton
                name="ok"
                onClick={() => registrationUse(login, password, email)}
            ></AuthButton>
            {isRegistrationStatus === false && <ErrorMessage text="Error! Incorrect data :("></ErrorMessage>}
        </div>
    )
}

export default Registration;