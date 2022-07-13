import { combineReducers } from "redux";
import { fetchallusersReducer } from "./fetchallemployee";


const rootReducer = combineReducers({
    fetchusers: fetchallusersReducer,
});

export default rootReducer;
