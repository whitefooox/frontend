import React from "react";
import User from "../../../model/dto/User";
import AuthServiceFactory from "../../../model/services/AuthService";
import Button from "../simple/Button";
import LabelInput from "../../component/simple/LabelInput";
import ColorText from "../../component/simple/ColorText";
import { Navigate } from "react-router-dom";

class Registration extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            login: "",
            password: "",
            email: "",
            status: null
        }
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onClickRegistration = this.onClickRegistration.bind(this);
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

    onChangeEmail(email){
        this.setState({
            email: email
        })
    }

    onClickRegistration(){
        const authService = AuthServiceFactory.createInstance();
        const user = new User();
        user.login = this.state.login;
        user.password = this.state.password;
        user.email = this.state.email;
        authService.signUp(user)
        .then(() => {
            console.log("ok");
            this.setState({
                status: "ok" 
            });
        })
        .catch(() => {
            console.log('error');
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
                    name="Login"
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
                <LabelInput
                    name="Email"
                    type="email"
                    getValue={this.onChangeEmail}
                />
                <br/>
                <Button
                    name="Sign up"
                    onClick={this.onClickRegistration}
                />
                {this.state.status === "ok" && <Navigate to="/main" replace={true} />}
            </div>
        )
    }
}

export default Registration;