import React from "react";
import Button from "../simple/Button";
import LabelInput from "../simple/LabelInput";
import AuthServiceFactory from "../../../model/services/AuthService";
import User from "../../../model/dto/User";
import { Navigate } from "react-router-dom";
import ColorText from "../simple/ColorText";

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            login: "",
            password: "",
            status: null
        }
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
    }

    onChangeLogin(login){
        this.setState({
            login: login
        });
    }

    onChangePassword(password){
        this.setState({
            password: password
        });
    }

    onClickLogin(){
        const authService = AuthServiceFactory.createInstance();
        const user = new User();
        user.login = this.state.login;
        user.password = this.state.password;
        authService.signIn(user)
        .then(() => {
            this.setState({
                status: "ok" 
            });
        })
        .catch(() => {
            this.setState({
                status: "error"
            });
        });
    }

    render(){
        return (
            <div>
                {this.state.status === "error" && <ColorText color="red" text="Error! Incorrect data :("/>}
                <LabelInput 
                    name="Username" 
                    type="text"
                    getValue={this.onChangeLogin}
                />
                <br/>
                <LabelInput 
                    name="Password"
                    type="password"
                    getValue={this.onChangePassword}
                />
                <br/>
                <Button
                    name="Sign in"
                    onClick={this.onClickLogin}
                />
                {this.state.status === "ok" && <Navigate to="/main" replace={true} />}
            </div>
        )
    }
}

export default Login;