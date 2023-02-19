import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import { noteReducer } from "./NOTES/notes.reducer"
import { authReducer } from "./USERS/user.reducer"

const mainReducer=combineReducers({
    authReducer:authReducer,
    noteReducer:noteReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store=legacy_createStore(mainReducer,composeEnhancer(applyMiddleware(thunk)))