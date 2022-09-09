import { createStore, applyMiddleware } from "redux";
import Reducers from "./Reducers";
import thunk from "redux-thunk";

export const store = createStore(Reducers, {}, applyMiddleware(thunk));
