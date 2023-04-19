import { Provider as ReduxProvider } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser, registrationUser } from './user/actions';
import store from './user/store';

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
    return useSelector((state) => state.isAuth);   
}

function useIsLoginStatusListener(){
    return useSelector((state) => state.isLoginStatus);
}

function useIsRegistrationStatusListener(){
    return useSelector((state) => state.isRegistrationStatus);
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

export {buildProvider, useIsAuthListener, useIsLoginStatusListener, useIsRegistrationStatusListener, useLoginDispatcher, useLogoutDispatcher, useRegistrationDispatcher};