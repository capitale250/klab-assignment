import * as actions from '../actiontypes/types.js'

const initialstate ={
    contacts:[]
}

export function fetchallusersReducer(state=initialstate ,action){
    switch(action.type){
        case actions.GET_ALL_EMPLOYEE:
        return {...state,users:action.payload}
        default:
        return state
    }
}