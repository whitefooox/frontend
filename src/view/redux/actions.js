import AuthServiceFactory from "../../model/services/AuthService";
import {createUserLogin, createUserReg} from '../../model/dto/User';

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTRATION_USER = 'REGISTRATION_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const createState = (type, payload) => {
    return {
        type,
        payload
    }
}

export const loginUser = (login, password) => {
    return dispatch => {
        const authService = AuthServiceFactory.createInstance();
        authService.signIn(createUserLogin(login, password))
        .then(() => {
            dispatch(createState(LOGIN_USER, true));
        })
        .catch(() => {
            dispatch(createState(LOGIN_USER, false));
        })
    }
}

export const registrationUser = (login, password, email) => {
    return dispatch => {
        console.log(createUserReg(login, password, email));
        const authService = AuthServiceFactory.createInstance();
        authService.signUp(createUserReg(login, password, email))
        .then(() => {
            dispatch(createState(REGISTRATION_USER, true));
        })
        .catch(() => {
            dispatch(createState(REGISTRATION_USER, false));
        })
    }
}

export const logoutUser = () => {
    return dispatch => {
        const authService = AuthServiceFactory.createInstance();
        authService.logout();
        dispatch(createState(LOGOUT_USER, false));
    }
}