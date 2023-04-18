import React from "react";
import ChatServiceFactory from "../../../model/services/ChatService";

class Chat extends React.Component {
    constructor(){
        super();
        this.state = {
            messageValue: "", 
            messages: []
        }
        this.chatService = ChatServiceFactory.createInstance();
        this.chatService.subscribe((message) => {
            this.setState({
                messages: [...this.state.messages, message]
            });
        });
        this.handleText = this.handleText.bind(this);
        this.send = this.send.bind(this);
    }
    componentDidMount(){
        this.chatService.open();
    }
    componentWillUnmount(){
        this.chatService.close();
    }
    handleText(e){
        this.setState({
            messageValue: e.target.value
        })
    }
    send(){
        if(this.state.messageValue){
            this.chatService.sendMessage(this.state.messageValue);
            this.setState({
                messageValue: ""
            })
        }
    }
    render(){
        return (
            <div>
                <p>Chat</p>
                <div style={{
                    height: "300px",
                    overflowY: "scroll",
                }}>
                    {this.state.messages.map((message, index) => (
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
                <input type="text" onChange={this.handleText} value={this.state.messageValue}></input>
                <button onClick={this.send}>{"--->"}</button>
            </div>
        )
    }
}

export default Chat;