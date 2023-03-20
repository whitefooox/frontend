import React, { useState } from "react";
import Button from "../simple/Button";
import LabelInput from "../simple/LabelInput";
import AuthServiceFactory from "../../../model/services/AuthService";
import User from "../../../model/dto/User";
import { useNavigate } from "react-router-dom";
import ColorText from "../simple/ColorText";

function Login(props){

    const navigate = useNavigate();

    const [status, setStatus] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(login){
        setLogin(login);
    }

    function handlePassword(password){
        setPassword(password);
    }

    function handleButton(){
        const authService = AuthServiceFactory.createInstance();
        const user = new User();
        user.login = login;
        user.password = password;
        authService.signIn(user)
        .then(() => {
            setStatus("ok");
            navigate('/main');
        })
        .catch(() => {
            setStatus("error");
        });
    }

    return (
        <div>
        {status === "error" && <ColorText color="red" text="Error! Incorrect data :("/>}
        <LabelInput 
            name="Username" 
            type="text"
            getValue={handleLogin}
        />
        <br/>
        <LabelInput 
            name="Password"
            type="password"
            getValue={handlePassword}
        />
        <br/>
        <Button
            name="Sign in"
            onClick={handleButton}
        />
    </div>
    )
}

export default Login;