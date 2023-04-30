import { useEffect, useState } from "react";
import { useConnectToChat } from "../../../state/redux/api";


function NewChat(props){

    const [messageValue, setMessageValue] = useState("");
    const [messages, setMessages] = useState([]);
    const useConnect = useConnectToChat();

    useConnect((message) => {
        setMessages([...messages, message]);
    });

    

    /*

    useEffect(() => {
        useConnect((message) => {
            setMessages([...messages, message]);
        })
    }, [useConnect, setMessages])
    */

    return (
        <div>
            <p>Chat</p>
            <div style={{
                height: "300px",
                overflowY: "scroll"
            }}>
                {messages.map((message, index) => (
                    message.type === "user" ?
                    <div key={index} style={{
                        marginBottom: "10px",
                        
                    }}>
                        <span style={{
                            color: "blue",
                            backgroundColor: "#bce9f7",
                        }}>{"[   " + message.username + "   ]"}</span>
                        <span style={{
                            wordWrap: "break-word"
                        }}>&nbsp;{message.text}</span>
                    </div>
                    : 
                    
                    message.type === "recommended" ?
                    <div key={index} style={{
                        marginBottom: "10px",
                        
                    }}>
                        <span style={{
                            wordWrap: "break-word",
                            backgroundColor: "#FFF8DC"
                        }}>&nbsp;{"🔹" + message.text + "🔹"}</span>
                    </div>
                    : 
                    
                    <div key={index} style={{
                        marginBottom: "10px",
                        
                    }}>
                        <span style={{
                            wordWrap: "break-word",
                            backgroundColor: "#00FFFF"
                        }}>&nbsp;{message.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewChat;