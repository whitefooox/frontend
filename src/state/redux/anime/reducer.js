import * as actions from './actions';

const initialState = {
    searchStatus: "",
    sourceStatus: "",
}

export default function reducerAnime(state = initialState, action){
    switch (action.type) {
        case actions.SEARCH_ANIME:
            return {
                ...state,
                searchStatus: action.payload.status,
                anime: action.payload.status === "ok" ? action.payload.anime : null
            }
        case actions.GET_SOURCE:
            return {
                ...state,
                sourceStatus: action.payload.status,
                source: action.payload.status === "ok" ? action.payload.source : null
            }
       default:
           return state;
   }
}