import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { getSource, searchAnime } from "../anime/actions";

function useSearchAnime(){
    const dispatch = useDispatch();
    return (name) => dispatch(searchAnime(name));
}

function useGetSource(){
    const dispatch = useDispatch();
    return (url) => dispatch(getSource(url));
}

function useListenerSearchStatus(){
    return useSelector((state) => state.anime.searchStatus);
}

function useListenerAnime(){
    return useSelector((state) => state.anime.anime);
}

function useListenerSource(){
    return useSelector((state) => state.anime.source);
}

function useListenerSourceStatus(){
    return useSelector((state) => state.anime.sourceStatus);
}

export {
    useSearchAnime,
    useGetSource,
    useListenerSource,
    useListenerSourceStatus,
    useListenerSearchStatus,
    useListenerAnime
}