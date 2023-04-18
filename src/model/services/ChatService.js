import Message from "../dto/Message";
import AuthServiceFactory from "./AuthService";
import Store from "./Store";

const API_URL = "ws://localhost:8080/web/chat";

class ChatService extends Store {
    sendMessage(text){
        const message = new Message();
        message.text = text;
        this.connection.send(JSON.stringify(message));
    }
    _getMessage(message){
        this._emit(JSON.parse(message));
    }
    close(){
        this.connection.close(1000, "Complete");
    }
    open(){
        this.username = AuthServiceFactory.createInstance().getLogin();
        this.connection = new WebSocket(API_URL + "/" + this.username);
        this.connection.onmessage = (event) => {
            this._getMessage(event.data);
        };
    }
}

class ChatServiceFactory {
    static _chat = null;

    static _createInstance() {
        return new ChatService();
    }

    static createInstance() {
        if (ChatServiceFactory._chat === null) {
            ChatServiceFactory._chat = ChatServiceFactory._createInstance();
        }
        return ChatServiceFactory._chat;
    }
}

export default ChatServiceFactory;