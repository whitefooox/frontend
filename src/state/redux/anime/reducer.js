import * as actions from './actions';

const initialState = {
    searchStatus: ""
}

export default function reducerAnime(state = initialState, action){
    switch (action.type) {
       case actions.SET_ANIME:
           return {
               ...state,
               anime: action.payload
           }
        case actions.SEARCH_ANIME:
            return {
                ...state,
                anime: action.payload,
                searchStatus: action.payload === null ? "error" : "ok"
            }
        case actions.SET_SEARCH_STATUS:
            return {
                ...state,
                searchStatus: action.payload
            }
       default:
           return state;
   }
}