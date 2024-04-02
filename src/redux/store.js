
import {createStore} from "redux"

import {rootReducer} from './rootReducer'

// console.log(rootReducer);

export const store=createStore(
    rootReducer,
)
