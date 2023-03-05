import React from "react";
import ColorText from "../simple/ColorText";

class Info extends React.Component {

    render(){
        if(this.props.status === "search"){
            return (
                <ColorText color="black" text="Wait, the search is underway 🔎"/>
            )
        } else if (this.props.status === "ok"){
            return (
                <>
                    <ColorText color="green" text="Found ✅"/>
                    <h2>{this.props.name}</h2>
                    <img src={this.props.img} alt=""/>
                </>
            )
        } else if(this.props.status === "error"){
            return (
                <ColorText color="red" text="Not found ❌"/>
            )
        }
    }
}

export default Info;