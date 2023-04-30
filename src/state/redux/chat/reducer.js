import * as actions from './actions';

const initialState = {
    chatService: null
}

export default function reducerChat(state = initialState, action){
    switch (action.type) {
       case actions.CONNECT_TO_CHAT:
           return {
               ...state,
               chatService: action.payload
           }
       default:
           return state;
   }
}