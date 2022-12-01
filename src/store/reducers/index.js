import {combineReducers} from "redux"
import recommend from "./recommend";
import song from './song'

const reducers = combineReducers({
    recommend,
    song
})

export default reducers