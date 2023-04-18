import { createStore, applyMiddleware } from "redux";
import reducerUser from "./reducer";
import thunk from "redux-thunk";

const store = createStore(reducerUser, applyMiddleware(thunk));
export default store;