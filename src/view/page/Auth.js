import React from "react";
import Button from "../component/simple/Button";
import Login from "../component/func/Login";
import Registration from "../component/func/Registration";

class Auth extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isRegistration: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            isRegistration: !this.state.isRegistration
        });
    }

    render(){
        return (
            <div style={{textAlign: "center"}}>
                {this.state.isRegistration ? <Registration/> : <Login/>}
                <Button
                    name={this.state.isRegistration ? "Already have an account?" : "Create an account."}
                    onClick={this.onClick}
                />
            </div>
        )
    }
}

export default Auth;