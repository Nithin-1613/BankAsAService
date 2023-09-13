import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store=configureStore({
    reducer: Reducer,
    middleware:[thunk,logger]
})

export default store;