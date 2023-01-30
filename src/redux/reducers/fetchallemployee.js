import * as actions from '../actiontypes/types.js'

const initialstate ={
    contacts:[],
    resp:[]

}

export function fetchallusersReducer(state=initialstate ,action){
    switch(action.type){
        case actions.GET_ALL_EMPLOYEE:
        return {...state,contacts:action.payload}
        case actions.POST_AN_EMPLOYEE:
        return {...state,resp:action.payload}
        default:
        return state
    }
}