import AnimeServiceFactory from "../../../model/services/AnimeServices";
import {createAction} from "../createAction";

export const SEARCH_ANIME = 'SEARCH_ANIME';
export const GET_SOURCE = 'GET_SOURCE';

export const searchAnime = (name) => {
    return dispatch => {
        dispatch(createAction(SEARCH_ANIME, {status: "search"}));
        const animeService = AnimeServiceFactory.createInstance();
        animeService.search(name)
        .then((anime) => {
            if(anime === null){
                dispatch(createAction(SEARCH_ANIME, {status: "error"}));
            } else {
                dispatch(createAction(SEARCH_ANIME, {status: "ok", anime: anime}));
            }
        })
        .catch(() => {
            console.log("error");
            dispatch(createAction(SEARCH_ANIME, {status: "error"}));
        })
    }
}

export const getSource = (url) => {
    return dispatch => {
        dispatch(createAction(GET_SOURCE, {status: "search"}));
        const animeService = AnimeServiceFactory.createInstance();
        animeService.getSource(url)
        .then((url) => {
            if(url === null){
                dispatch(createAction(GET_SOURCE, {status: "error"}));
            } else {
                dispatch(createAction(GET_SOURCE, {status: "ok", source: url}));
            }
        })
        .catch(() => {
            dispatch(createAction(GET_SOURCE, {status: "error"}));
        })
    }
}