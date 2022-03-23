import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import cartreducer from "./cartreducer";


export default combineReducers({
   cartreducer,
   auth,
   message,
})

