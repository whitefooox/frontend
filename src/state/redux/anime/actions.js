import AnimeServiceFactory from "../../../model/services/AnimeServices";

export const SEARCH_ANIME = 'SEARCH_ANIME';
export const GET_SOURCE = 'GET_SOURCE';

const createState = (type, payload) => {
    return {
        type,
        payload
    }
}

export const searchAnime = (name) => {
    return dispatch => {
        dispatch(createState(SEARCH_ANIME, {status: "search"}));
        const animeService = AnimeServiceFactory.createInstance();
        animeService.search(name)
        .then((anime) => {
            dispatch(createState(SEARCH_ANIME, {status: "ok", anime: anime}));
        })
        .catch(() => {
            dispatch(createState(SEARCH_ANIME, {status: "error"}));
        })
    }
}

export const getSource = (url) => {
    return dispatch => {
        dispatch(createState(GET_SOURCE, {status: "search"}));
        const animeService = AnimeServiceFactory.createInstance();
        animeService.getSource(url)
        .then((url) => {
            dispatch(createState(GET_SOURCE, {status: "ok", source: url}));
        })
        .catch(() => {
            dispatch(createState(GET_SOURCE, {status: "error"}));
        })
    }
}