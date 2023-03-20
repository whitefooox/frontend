import React, { useState } from "react";
import Button from "../component/simple/Button";
import Login from "../component/func/Login";
import Registration from "../component/func/Registration";

function Auth(props){

    const [isRegistration, setIsRegistration] = useState(false);

    return (
        <div style={{textAlign: "center"}}>
            {isRegistration ? <Registration/> : <Login/>}
            <Button
                name={isRegistration ? "Already have an account?" : "Create an account."}
                onClick={() => {setIsRegistration(!isRegistration)}}
            />
        </div>
    )
}

export default Auth;