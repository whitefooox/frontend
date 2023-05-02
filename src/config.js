const protocol = 'http';
const ws = 'ws'
const domain = 'localhost';
const port = '8080';
const name = 'web';
const api = 'api';

const anime = 'anime';
const user = 'user';
const chat = 'chat';

const API = `${protocol}://${domain}:${port}/${name}/${api}`;
const WEBSOCKET = `${ws}://${domain}:${port}/${name}`;
const ANIME_API = `${API}/${anime}`;
const USER_API = `${API}/${user}`;
const CHAT_API = `${WEBSOCKET}/${chat}`;

export {
    ANIME_API,
    USER_API,
    CHAT_API
}