import AuthServiceFactory from "../../../model/services/AuthService";
import { createUserLogin, createUserReg } from "../../../model/dto/User";
import {createAction} from "../createAction";

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTRATION_USER = 'REGISTRATION_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (login, password) => {
    return dispatch => {
        const authService = AuthServiceFactory.createInstance();
        authService.signIn(createUserLogin(login, password))
        .then(() => {
            dispatch(createAction(LOGIN_USER, true));
        })
        .catch(() => {
            dispatch(createAction(LOGIN_USER, false));
        })
    }
}

export const registrationUser = (login, password, email) => {
    return dispatch => {
        const authService = AuthServiceFactory.createInstance();
        authService.signUp(createUserReg(login, password, email))
        .then(() => {
            dispatch(createAction(REGISTRATION_USER, true));
        })
        .catch(() => {
            dispatch(createAction(REGISTRATION_USER, false));
        })
    }
}

export const logoutUser = () => {
    return dispatch => {
        const authService = AuthServiceFactory.createInstance();
        authService.logout();
        dispatch(createAction(LOGOUT_USER));
    }
}