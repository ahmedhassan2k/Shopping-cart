import { createStore } from "redux";
import reducer from '../Reducers/rootReducer'
export const store = createStore(reducer);