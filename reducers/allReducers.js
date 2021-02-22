import rootReducer from "./rootReducer";
import characterReducer from "./characterReducer";
import { combineReducers } from "redux";
import userReducer from "./userReducer";

const allReducers = combineReducers({
  root: rootReducer,
  character: characterReducer,
  user: userReducer,
});

export default allReducers;
