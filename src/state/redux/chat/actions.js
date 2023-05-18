import { connectToChat, disconnectToChat, sendToChat } from "../../../model/services/ChatV2";

export const CONNECT_TO_CHAT = 'CONNECT_TO_CHAT';
export const DISCONNECT_CHAT = 'DISCONNECT_CHAT';
export const SEND_TO_CHAT = 'SEND_TO_CHAT';

const createState = (type, payload) => {
    return {
        type,
        payload
    }
}

export const connectToChatAction = (callback) => {
    return dispatch => {
        connectToChat(callback);
        dispatch(createState(CONNECT_TO_CHAT));
    }
}

export const disconnectToChatAction = () => {
    return dispatch => {
        disconnectToChat();
        dispatch(createState(DISCONNECT_CHAT));
    }
}

export const sendToChatAction = (message) => {
    return dispatch => {
        sendToChat(message);
        dispatch(createState(SEND_TO_CHAT));
    }
}