import React, { useEffect, useState } from "react";
import Button from "../simple/Button";
import LabelInput from "../simple/LabelInput";
import { useNavigate } from "react-router-dom";
import Text from "../simple/Text";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions";

function Login(props){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const isAuth = useSelector(state => state.isAuth);
    const isLoginStatus = useSelector(state => state.isLoginStatus);

    useEffect(() => {
        if(isAuth){
            navigate('/main');
        }
    }, [isAuth]);

    return (
        <div>
        {isLoginStatus === false && <><Text color="red" text="Error! Incorrect data :("/><br/></>}
        <LabelInput 
            name="Username" 
            type="text"
            getValue={(value) => setLogin(value)}
        />
        <br/>
        <LabelInput 
            name="Password"
            type="password"
            getValue={(value) => setPassword(value)}
        />
        <br/>
        <Button
            name="Sign in"
            onClick={() => dispatch(loginUser(login, password))}
        />
    </div>
    )
}

export default Login;