import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LabelInput from "../labelInput/LabelInput";
import Button from "../button/Button";
import classes from './Registration.module.css';
import ErrorMessage from "../errorMessage/ErrorMessage";
import { useListenerIsAuth, useListenerIsRegistrationStatus, useRegistration } from "../../../state/redux/api/apiUser";

function Registration(props){

    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const isAuth = useListenerIsAuth();
    const isRegistrationStatus = useListenerIsRegistrationStatus();
    const registrationUse = useRegistration();

    useEffect(() => {
        if(isAuth){
            navigate('/main');
        }
    }, [isAuth, navigate]);

    return (
        <div className={classes.registration__form}>
            <LabelInput
                title="Имя пользователя"
                type="text"
                getValue={setLogin}
            ></LabelInput>
            <LabelInput
                title="Пароль"
                type="password"
                getValue={setPassword}
            >
            </LabelInput>
            <LabelInput
                title="Почта"
                type="email"
                getValue={setEmail}
            ></LabelInput>
            <Button
                name="Зарегистрироваться"
                onClick={() => registrationUse(login, password, email)}
            ></Button>
            {isRegistrationStatus === false && <ErrorMessage text="Error! Incorrect data :("></ErrorMessage>}
        </div>
    )
}

export default Registration;