import { combineReducers } from "redux";

import bookSearch from "./bookSearch/reducer";
import userReducer from "./user/reducer";

export default combineReducers({ bookSearch, userReducer });
