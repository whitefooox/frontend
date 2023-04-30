import React, { useState } from "react";
import Login from "../../component/login/Login";
import classes from './Auth.module.css';
import Button from "../../component/button/Button";
import Registration from "../../component/registration/Registration";

function Auth(props){

    const [isRegistration, setIsRegistration] = useState(false);

    return (
        <div className={classes.auth__wrapper}>
            {isRegistration ? <Registration/> : <Login/>}
            <Button
                name={isRegistration ? "Already have an account?" : "Create an account"}
                onClick={() => {setIsRegistration(!isRegistration)}}
            ></Button>
        </div>
    )
}

export default Auth;