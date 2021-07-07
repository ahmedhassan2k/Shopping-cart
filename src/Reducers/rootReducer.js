import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import shopReducer from "./shopReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
export default combineReducers({
    loginReducer,
    registerReducer,
    shopReducer,
    cartReducer,
    orderReducer
})