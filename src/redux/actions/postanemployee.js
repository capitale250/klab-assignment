import Axios from './axiosConfig'
import * as actions from '../actiontypes/types.js'


export const fetchusers = () => dispatch => {
  
  return Axios.post(`/contacts`)
    .then(res => {
      dispatch({
        type: actions.POST_AN_EMPLOYEE,
        payload: res.data
      })
      }
    )
   
}