import { Provider as ReduxProvider } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser, registrationUser } from './user/actions';
import store from './store';
import { getSource, searchAnime, setAnime } from './anime/actions';
import { connectToChat } from './chat/actions';

function buildProvider(){
    return (props)=> {
        return (
            <ReduxProvider store = {store}>     
            {props.children}  
            </ReduxProvider>
        );
    };
}

function useIsAuthListener(){
    return useSelector((state) => state.user.isAuth);   
}

function useIsLoginStatusListener(){
    return useSelector((state) => state.user.isLoginStatus);
}

function useIsRegistrationStatusListener(){
    return useSelector((state) => state.user.isRegistrationStatus);
}

function useLoginDispatcher(){
    const dispatch = useDispatch();
    return (login, password) => dispatch(loginUser(login, password));
}

function useRegistrationDispatcher(){
    const dispatch = useDispatch();
    return (login, password, email) => dispatch(registrationUser(login, password, email));
}

function useLogoutDispatcher(){
    const dispatch = useDispatch();
    return () => dispatch(logoutUser());
}

function useAnimeListener(){
    return useSelector((state) => state.anime.anime);
}

function useSetAnimeDispatcher(){
    const dispatch = useDispatch();
    return (anime) => dispatch(setAnime(anime));
}

function useSearchStatusListener(){
    return useSelector((state) => state.anime.searchStatus);
}

function useSearchAnimeDispatcher(){
    const dispatch = useDispatch();
    return (name) => dispatch(searchAnime(name));
}

function useSourceListener(){
    return useSelector((state) => state.anime.source);
}

function useGetSourceDispatcher(){
    const dispatch = useDispatch();
    return (url) => dispatch(getSource(url));
}

function useSourceStatusListener(){
    return useSelector((state) => state.anime.getSourceStatus)
}

function useConnectToChat(){
    const dispatch = useDispatch();
    return (callback) => dispatch(connectToChat(callback));
}

export {buildProvider, useIsAuthListener, useIsLoginStatusListener, 
        useIsRegistrationStatusListener, useLoginDispatcher, useLogoutDispatcher, useRegistrationDispatcher,
        useAnimeListener, useSetAnimeDispatcher,
        useSearchStatusListener, useSearchAnimeDispatcher,
        useSourceListener, useGetSourceDispatcher, useSourceStatusListener,
    useConnectToChat};