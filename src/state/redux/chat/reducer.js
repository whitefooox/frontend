import * as actions from './actions';

const initialState = {}

export default function reducerChat(state = initialState, action){
    switch (action.type) {
       case actions.CONNECT_TO_CHAT:
           return {
               ...state
           }
        case actions.DISCONNECT_CHAT:
            return {
                ...state
            }
        case actions.SEND_TO_CHAT:
            return {
                ...state
            }
       default:
           return state;
   }
}