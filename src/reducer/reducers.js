import { combineReducers } from 'redux'
import modal from "./modal";
import range from "./range-picker";
import options from "./options";


const reducers =  combineReducers({
    modal,
    range,
    options
})

export default reducers;