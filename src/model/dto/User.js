export class User {
    login;
    password;
    email;
}

export const createUserReg = (login, password, email) => {
    const newUser = new User();
    newUser.login = login;
    newUser.password = password;
    newUser.email = email;
    return newUser;
}

export const createUserLogin = (login, password) => {
    const newUser = new User();
    newUser.login = login;
    newUser.password = password;
    return newUser;
}