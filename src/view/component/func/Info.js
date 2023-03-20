import React from "react";
import ColorText from "../simple/ColorText";

function Info(props){
    if(props.status === "search"){
        return (
            <ColorText color="black" text="Wait, the search is underway 🔎"/>
        )
    } else if (props.status === "ok"){
        return (
            <>
                <ColorText color="green" text="Found ✅"/>
                <h2>{props.name}</h2>
                <img src={props.img} alt=""/>
            </>
        )
    } else if(props.status === "error"){
        return (
            <ColorText color="red" text="Not found ❌"/>
        )
    }
}

export default Info;