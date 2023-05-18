import React, { useEffect, useRef, useState } from "react";
import { useSearchAnime } from "../../../state/redux/api/apiAnime";
import classes from './Chat.module.css';
import { useConnectToChat, useDisconnectToChat, useSendToChat } from "../../../state/redux/api/apiChat";

function Chat(props){

    const [messages, setMessages] = useState([]);
    const [messageValue, setMessageValue] = useState("");
    const searchAnime = useSearchAnime();
    const messageEnd = useRef(null);

    const connect = useConnectToChat();
    const disconnect = useDisconnectToChat();
    const sendToChat = useSendToChat();

    useEffect(() => {
        connect((message) => {
            console.log(message)
            setMessages(messages => [...messages, message]);
        })
        return () => {
            disconnect();
        }
    }, []);
    
    function send(){
        if(messageValue){
            sendToChat(messageValue);
            setMessageValue("");
        }
    }

    const scrollToBottom = () => {
        messageEnd.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    return (
        <div className={classes.chat_container}>
        <div className={classes.messages_container}>
          {messages.map((message, index) => (
            message.type === 'user' ? (
                <div className={classes.message_user} key={index}>
                    <h3>{message.username}</h3>
                    <p>{message.text}</p>
                </div>
            )
            :
            message.type === 'recommended' ? (
                <div className={classes.message_recommended} key={index}
                onClick={() => {
                    searchAnime(message.text.replace(/[^А-яA-z]/g, ' ').replace(/^ +| +$|( ) +/g,"$1"));
                }}
                >
                  <p>{message.text}</p>
                </div>
            )
            :

            (
                <div className={classes.message_system} key={index}>
                  <p>{message.text}</p>
                </div>
            )
          ))}
          <div ref={messageEnd} />
        </div>
        <div className={classes.input_container}>
          <input type="text" value={messageValue} onChange={(e) => setMessageValue(e.target.value)} placeholder="Введите сообщение" />
          <button onClick={() => send()}>Отправить</button>
        </div>
      </div>
    )
}

export default Chat;