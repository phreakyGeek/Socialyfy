import { apiConnections } from "../../../api/apiConnections";
import { get } from '../../../api/baseApi'
import {
    FETCH_USER_FAILURE,
    FETCH_USER_LOADING, FETCH_USER_SUCCESS
} from "../userType";

export const getUsers = () => {
    return async(dispatch) => {
        dispatch({type: FETCH_USER_LOADING})
        try{
            const url = apiConnections.getUsers
            const response = await get(url)
            if(response && response.data){
                dispatch({type: FETCH_USER_SUCCESS, payload: response.data})
            }else {
                dispatch({type: FETCH_USER_FAILURE, payload: "Data Not Found"})
            }
        }catch(error){
            dispatch({type: FETCH_USER_FAILURE, payload: error})
        }
    }
}