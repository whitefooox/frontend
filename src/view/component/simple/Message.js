import React from "react";
import Text from "./Text";

function Message(props){
    return (
        <div>
            <Text text={"[ " + props.content.username + " ]"} color="blue"></Text>
            <Text text=" "></Text>
            <Text text={props.content.text}></Text>
        </div>
    )
}

export default Message;