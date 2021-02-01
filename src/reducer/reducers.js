import { combineReducers } from 'redux'
import modal from "./modal";
import range from "./range-picker";
import options from "./options";
import connection from "./connection";


const reducers =  combineReducers({
    modal,
    range,
    options,
    connection
})

export default reducers;