import React, { useState } from "react";
import Login from "../../component/login/Login";
import classes from './Auth.module.css';
import AuthButton from "../../component/authButton/AuthButton";
import Registration from "../../component/registration/Registration";

function Auth(props){

    const [isRegistration, setIsRegistration] = useState(false);

    return (
        <div className={classes.auth__wrapper}>
            {isRegistration ? <Registration/> : <Login/>}
            <AuthButton
                name={isRegistration ? "Already have an account?" : "Create an account"}
                onClick={() => {setIsRegistration(!isRegistration)}}
            ></AuthButton>
        </div>
    )
}

export default Auth;