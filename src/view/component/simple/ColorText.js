import React from "react";

function ColorText(props){
    return (
        <p style={{color: props.color}}>{props.text}</p>
    )
}

export default ColorText;