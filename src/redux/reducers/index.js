import { combineReducers } from "redux";
import AuthReducer from "./auth_reducer";
import LoaderReducer from "./loader_reducer";

const RootReducer = combineReducers({
  Auth: AuthReducer,
  Loader: LoaderReducer,

});

export default RootReducer;
