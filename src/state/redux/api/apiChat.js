import { connectToChatAction, disconnectToChatAction, sendToChatAction } from "../chat/actions";
import { useDispatch } from "react-redux";

function useConnectToChat(){
    const dispatch = useDispatch();
    return (callback) => dispatch(connectToChatAction(callback));
}

function useDisconnectToChat(){
    const dispatch = useDispatch();
    return () => dispatch(disconnectToChatAction());
}

function useSendToChat(){
    const dispatch = useDispatch();
    return (message) => dispatch(sendToChatAction(message));
}

export {
    useConnectToChat,
    useDisconnectToChat,
    useSendToChat
}