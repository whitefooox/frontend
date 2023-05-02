import React, { useEffect, useState } from "react";
import ChatServiceFactory from "../../../model/services/ChatService";
import { useSearchAnime } from "../../../state/redux/api/apiAnime";

const chatService = ChatServiceFactory.createInstance();

function Chat(props){

    const [messages, setMessages] = useState([]);
    const [messageValue, setMessageValue] = useState("");
    const searchAnime = useSearchAnime();

    useEffect(() => {
        chatService.subscribe(message => {
            setMessages(messages => [...messages, message]);
        })
        chatService.open();
        return () => {
            chatService.close();
        }
    }, []);
    
    function send(){
        if(messageValue){
            chatService.sendMessage(messageValue);
            setMessageValue("");
        }
    }
    
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
                        
                    }}
                    onClick={() => {
                        searchAnime(message.text.replace(/[^А-яA-z]/g, ' ').replace(/^ +| +$|( ) +/g,"$1"));
                    }}
                    >
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
            <input type="text" onChange={(e) => setMessageValue(e.target.value)} value={messageValue}></input>
            <button onClick={() => send()}>{"--->"}</button>
        </div>
    )
}

export default Chat;