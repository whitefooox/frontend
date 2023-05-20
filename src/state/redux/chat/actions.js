import { connectToChat, disconnectToChat, sendToChat } from "../../../model/services/ChatV2";
import {createAction} from "../createAction";
export const CONNECT_TO_CHAT = 'CONNECT_TO_CHAT';
export const DISCONNECT_CHAT = 'DISCONNECT_CHAT';
export const SEND_TO_CHAT = 'SEND_TO_CHAT';

export const connectToChatAction = (callback) => {
    return dispatch => {
        connectToChat(callback);
        dispatch(createAction(CONNECT_TO_CHAT));
    }
}

export const disconnectToChatAction = () => {
    return dispatch => {
        disconnectToChat();
        dispatch(createAction(DISCONNECT_CHAT));
    }
}

export const sendToChatAction = (message) => {
    return dispatch => {
        sendToChat(message);
        dispatch(createAction(SEND_TO_CHAT));
    }
}