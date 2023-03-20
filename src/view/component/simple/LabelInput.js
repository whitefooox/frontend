import React from "react";

function LabelInput(props){

    function handleInput(e){
        props.getValue(e.target.value);
    }

    return (
        <>
            <label>{props.name}</label>
            <br/>
            <input type={props.type} onChange={handleInput}></input>
        </>
    )
}

export default LabelInput;