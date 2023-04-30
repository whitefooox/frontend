import * as actions from './actions';

const initialState = {
    searchStatus: "",
    getSourceStatus: ""
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
                searchStatus: action.payload === null ? "error" : "ok",
                getSourceStatus: ""
            }
        case actions.SET_SEARCH_STATUS:
            return {
                ...state,
                searchStatus: action.payload
            }
        case actions.GET_SOURCE_VIDEO:
            return {
                ...state,
                source: action.payload,
                getSourceStatus: action.payload === null ? "error" : "ok"
            }
       default:
           return state;
   }
}