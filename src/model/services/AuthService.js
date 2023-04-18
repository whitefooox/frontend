const API_URL = "http://localhost:8080/web/api/user/";

class Auth {

    async signIn(user){
        const response = await fetch(API_URL + "auth", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(user)
        });
        if(response.ok){
            await response.json().then((token) => {
                this.#save(user.login, token);
            });
            return;
        } else {
            return Promise.reject();
        }
    }

    async signUp(user){
        console.log(user);
        const response = await fetch(API_URL + "reg", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(user)
        });
        if(response.ok){
            await response.json().then((token) => {
                this.#save(user.login, token);
            });
            console.log(this.getLogin());
            return;
        } else {
            return Promise.reject();
        }
    }

    logout(){
        localStorage.removeItem('login');
        localStorage.removeItem('token');
    }

    #save(login, token){
        localStorage.setItem('login', login);
        localStorage.setItem('token', token);
    }

    getLogin(){
        return localStorage.getItem('login');
    }

    getToken(){
        return localStorage.getItem('token');
    }
}

class AuthServiceFactory {
   
    static _auth = null;
    
    static _createInstance() {
        return new Auth();      
    }
       
    static createInstance() {
        if (AuthServiceFactory._auth === null) {
            AuthServiceFactory._auth = AuthServiceFactory._createInstance();  
        }      
        return AuthServiceFactory._auth;
    }
}

export default AuthServiceFactory