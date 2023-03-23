import React, { useState } from "react";
import User from "../../../model/dto/User";
import AuthServiceFactory from "../../../model/services/AuthService";
import Button from "../simple/Button";
import LabelInput from "../../component/simple/LabelInput";
import ColorText from "../../component/simple/ColorText";
import { useNavigate } from "react-router-dom";

function Registration(props){

    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    function handleButton(){
        const authService = AuthServiceFactory.createInstance();
        const user = new User();
        user.login = login;
        user.password = password;
        user.email = email;
        authService.signUp(user)
        .then(() => {
            console.log("ok");
            setStatus('ok');
            navigate('/main');
        })
        .catch(() => {
            console.log('error');
            setStatus('error');
        });
    }

    return (
        <div>
            {status === "error" && <ColorText color="red" text="Error! Incorrect data :("/>}
            <LabelInput
                name="Login"
                type="text"
                getValue={(targetLogin) => {setLogin(targetLogin)}}
            />
            <br/>
            <LabelInput
                name="Password"
                type="password"
                getValue={(targetPassword) => {setPassword(targetPassword)}}
            />
            <br/>
            <LabelInput
                name="Email"
                type="email"
                getValue={(targetEmail) => {setEmail(targetEmail)}}
            />
            <br/>
            <Button
                name="Sign up"
                onClick={handleButton}
            />
        </div>
    )
}

export default Registration;