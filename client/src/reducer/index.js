import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import { getProductReducer } from "./productReducer";

export default combineReducers({
  auth: AuthReducer,
  productReducer: getProductReducer,
});
