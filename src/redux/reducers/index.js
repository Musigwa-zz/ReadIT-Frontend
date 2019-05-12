import { combineReducers } from "redux";
import loginReducers from "./authReducers";
import socialAuthReducers from "./socialAuthReducer";

export default combineReducers({
  auth: loginReducers,
  login: loginReducers,
  socialAuth: socialAuthReducers,
});
