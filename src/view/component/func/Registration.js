import React, { useState, useEffect } from "react";
import Button from "../simple/Button";
import LabelInput from "../../component/simple/LabelInput";
import Text from "../../component/simple/Text";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registrationUser } from "../../redux/actions";

function Registration(props){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const isAuth = useSelector(state => state.isAuth);
    const isRegistrationStatus = useSelector(state => state.isRegistrationStatus);

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
                onClick={() => dispatch(registrationUser(login, password, email))}
            />
        </div>
    )
}

export default Registration;