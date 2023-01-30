import Axios from './axiosConfig'
import * as actions from '../actiontypes/types.js'


export const fetchusers = () => dispatch => {
  
  return Axios.get(`/contacts`)
    .then(res => {
      dispatch({
        type: actions.GET_ALL_EMPLOYEE,
        payload: res.data
      })
      }
    )
   
}
export const postemployee = (employee) => dispatch => {
  
  return Axios.post(`/contacts`,employee)
    .then(res => {
      console.log(res)
      dispatch({
        type: actions.POST_AN_EMPLOYEE,
        payload: res.data
      })
      }
    )
   
}