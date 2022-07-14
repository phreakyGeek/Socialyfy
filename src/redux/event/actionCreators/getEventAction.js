import { apiConnections } from "../../../api/apiConnections";
import { get } from '../../../api/baseApi'
import {
    FETCH_EVENT_LOADING,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_FAILURE,
} from "../eventActionType";

export const getEventDetails = () => {
    return async(dispatch) => {
        dispatch({type: FETCH_EVENT_LOADING})
        try{
            const url = apiConnections.getMylifeEvents
            const response = await get(url)
            if(response && response.data){
                dispatch({type: FETCH_EVENT_SUCCESS, payload: response.data})
            }else {
                dispatch({type: FETCH_EVENT_FAILURE, payload: "Data Not Found"})
            }
        }catch(error){
            dispatch({type: FETCH_EVENT_FAILURE, payload: error})
        }
    }
}