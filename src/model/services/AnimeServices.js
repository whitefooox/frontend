import AuthServiceFactory from "./AuthService";

const API_URL = "http://localhost:8080/web/api/anime/";

class Anime {
  constructor() {
    this.authService = AuthServiceFactory.createInstance();
  }

  async search(name) {
    const response = await fetch(API_URL + "search/" + name, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        login: this.authService.getLogin(),
        token: this.authService.getToken(),
      },
    });
    if(response.ok){
      return response.json();
    } else {
      console.log('ошибка при получении данных', response.status);
      return null;
    }
  }

  async getSource(url) {
    const response = await fetch(API_URL + "source/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        login: this.authService.getLogin(),
        token: this.authService.getToken(),
        userAgent: window.navigator.userAgent,
      },
      body: JSON.stringify(url),
    });
    return response.ok ? response.json() : Promise.reject();
  }
}

class AnimeServiceFactory {
  static _anime = null;

  static _createInstance() {
    return new Anime();
  }

  static createInstance() {
    if (AnimeServiceFactory._anime === null) {
        AnimeServiceFactory._anime = AnimeServiceFactory._createInstance();
    }
    return AnimeServiceFactory._anime;
  }
}

export default AnimeServiceFactory;