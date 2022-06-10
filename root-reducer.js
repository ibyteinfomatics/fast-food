/** @format */

import { combineReducers } from "redux";
import headerReducer from "./components/header/header-reducer";
export const rootReducer = combineReducers({
  setHeaderData: headerReducer,
});

export default rootReducer;
