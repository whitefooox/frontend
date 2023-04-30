import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, registrationUser } from "../user/actions";

function useLogin(){
    const dispatch = useDispatch();
    return (login, password) => dispatch(loginUser(login, password));
}

function useRegistration(){
    const dispatch = useDispatch();
    return (login, password, email) => dispatch(registrationUser(login, password, email));
}

function useLogout(){
    const dispatch = useDispatch();
    return () => dispatch(logoutUser());
}

function useListenerIsAuth(){
    return useSelector((state) => state.user.isAuth);
}

function useListenerIsLoginStatus(){
    return useSelector((state) => state.user.isLoginStatus);
}

function useListenerIsRegistrationStatus(){
    return useSelector((state) => state.user.isRegistrationStatus);
}

export {
    useLogin,
    useRegistration,
    useLogout,
    useListenerIsAuth,
    useListenerIsLoginStatus,
    useListenerIsRegistrationStatus
}