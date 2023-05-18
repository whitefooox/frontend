import { CHAT_API } from "../../config";
import AuthServiceFactory from "./AuthService";
import Message from "../dto/Message";

let chatSocket;
let isOpen;

export const connectToChat = (callback) => {
    if(isOpen) return;
    chatSocket = new WebSocket(CHAT_API + "/" + AuthServiceFactory.createInstance().getLogin());
    chatSocket.onmessage = (event) => {
        callback(JSON.parse(event.data));
    }
    isOpen = true;
}

export const disconnectToChat = () => {
    if(!isOpen) return;
    chatSocket.close();
    isOpen = false;
}

export const sendToChat = (message) => {
    if(!isOpen) return;
    const mes = new Message();
    mes.text = message;
    chatSocket.send(JSON.stringify(mes));
}