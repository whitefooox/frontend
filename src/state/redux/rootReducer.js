import { combineReducers } from "redux";
import reducerUser from "./user/reducer";
import reducerAnime from "./anime/reducer";

export default combineReducers({
    user: reducerUser,
    anime: reducerAnime
})