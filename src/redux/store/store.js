import { combineReducers, createStore } from "redux";
import productReducer from "../reducers/productReducer/productReducer";


const rootReducer=combineReducers({productReducer})

const store=createStore(rootReducer)

export default store;