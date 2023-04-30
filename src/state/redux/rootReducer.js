import { combineReducers } from "redux";
import reducerUser from "./user/reducer";
import reducerAnime from "./anime/reducer";
import reducerChat from "./chat/reducer";
import { LOGOUT_USER } from "./user/actions";

const appReducer = combineReducers({
    user: reducerUser,
    anime: reducerAnime,
    chat: reducerChat
})

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER) {
      return appReducer(undefined, action);
    }
    return appReducer(state, action);
}

export default rootReducer;