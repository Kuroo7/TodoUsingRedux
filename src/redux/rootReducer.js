// This file is use to combine multiple reducers and this is passed to the store file

import {combineReducers} from "redux"
import { operationsReducer } from "./todoapp/reducers/operations"



export const rootReducer=combineReducers({
    operationsReducer,

    //more reducers can be added here
})