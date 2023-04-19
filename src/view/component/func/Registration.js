import React, { useState, useEffect } from "react";
import Button from "../simple/Button";
import LabelInput from "../../component/simple/LabelInput";
import Text from "../../component/simple/Text";
import { useNavigate } from "react-router-dom";
import { useIsAuthListener, useIsRegistrationStatusListener, useRegistrationDispatcher } from "../../../state/redux/api";

function Registration(props){

    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const isAuth = useIsAuthListener();
    const isRegistrationStatus = useIsRegistrationStatusListener();
    const useRegistration = useRegistrationDispatcher();

    useEffect(() => {
        if(isAuth){
            navigate('/main');
        }
    }, [isAuth]);

    return (
        <div>
            {isRegistrationStatus === false && <Text color="red" text="Error! Incorrect data :("/>}
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
                onClick={() => useRegistration(login, password, email)}
            />
        </div>
    )
}

export default Registration;