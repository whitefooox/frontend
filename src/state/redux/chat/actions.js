import { useSelector } from "react-redux";
import ChatServiceFactory from "../../../model/services/ChatService";

export const CONNECT_TO_CHAT = 'CONNECT_TO_CHAT';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DISCONNECT_CHAT = 'DISCONNECT_CHAT';

const createState = (type, payload) => {
    return {
        type,
        payload
    }
}

export const connectToChat = (callback) => {
    return dispatch => {
        dispatch(createState(CONNECT_TO_CHAT, ChatServiceFactory.createInstance()));
        const chatService = useSelector(state => state.chat.chatService);
        chatService.subscribe(callback);
        chatService.open();
    }
}