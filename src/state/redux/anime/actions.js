import AnimeServiceFactory from "../../../model/services/AnimeServices";

export const SET_ANIME = 'SET_ANIME';
export const SEARCH_ANIME = 'SEARCH_ANIME';
export const SET_SEARCH_STATUS = 'SET_SEARCH_STATUS';
export const GET_SOURCE_VIDEO = 'GET_SOURCE_VIDEO';

const createState = (type, payload) => {
    return {
        type,
        payload
    }
}

export const setAnime = (anime) => {
    return dispatch => {
        dispatch(createState(SET_ANIME, anime));
    }
}

export const searchAnime = (name) => {
    return dispatch => {
        dispatch(createState(SET_SEARCH_STATUS, "search"));
        const animeService = AnimeServiceFactory.createInstance();
        animeService.search(name)
        .then((anime) => {
            dispatch(createState(SEARCH_ANIME, anime));
        })
        .catch(() => {
            dispatch(createState(SEARCH_ANIME, null));
        })
    }
}

export const getSource = (url) => {
    return dispatch => {
        const animeService = AnimeServiceFactory.createInstance();
        animeService.getSource(url)
        .then((url) => {
            dispatch(createState(GET_SOURCE_VIDEO, url));
        })
        .catch(() => {
            dispatch(createState(GET_SOURCE_VIDEO, null));
        })
    }
}