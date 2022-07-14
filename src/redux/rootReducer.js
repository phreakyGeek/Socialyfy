import { combineReducers } from "redux";
// import { getUserReducer } from "./user/reducers/getUserReducer";
import { getEventReducer } from './event/reducers/getEventReducer'

const rootReducer = combineReducers({
    // getUserReducer,
    getEventReducer
})

export default rootReducer