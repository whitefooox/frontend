import React, { useEffect, useRef, useState } from "react";
import ChatServiceFactory from "../../../model/services/ChatService";
import { useSearchAnime } from "../../../state/redux/api/apiAnime";
import classes from './Chat.module.css';

const chatService = ChatServiceFactory.createInstance();

function Chat(props){

    const [messages, setMessages] = useState([]);
    const [messageValue, setMessageValue] = useState("");
    const searchAnime = useSearchAnime();
    const messageEnd = useRef(null);

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
    
   /*
   return (
    <div>
    <div className={classes.chat__container}>
        {messages.map((message, index) => (
            message.type === "user" ?
            <div className={classes.user_message} key={index}>
                <span>{"[   " + message.username + "   ]"}</span>
                <span>&nbsp;{message.text}</span>
            </div>
            : 
            
            message.type === "recommended" ?
            <div key={index} className={classes.recommendation_message}
            onClick={() => {
                searchAnime(message.text.replace(/[^А-яA-z]/g, ' ').replace(/^ +| +$|( ) +/g,"$1"));
            }}
            >
                 <span>&nbsp;{message.text}</span>
            </div>
            : 
            
            <div key={index} className={classes.system_message}>
                <span>&nbsp;{message.text}</span>
            </div>
        ))}
    </div>
    <div className={classes.chat_input}>
        <input type="text" onChange={(e) => setMessageValue(e.target.value)} value={messageValue}></input>
        <button onClick={() => send()}>{"--->"}</button>
    </div>
    </div>
   )
   */
}

export default Chat;