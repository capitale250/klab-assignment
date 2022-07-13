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