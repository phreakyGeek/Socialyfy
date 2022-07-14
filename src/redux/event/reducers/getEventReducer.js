import {
    FETCH_EVENT_LOADING,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_FAILURE,
} from "../eventActionType"

const initialState = {
    loading: false,
    data: [],
    error: '',
}

export const getEventReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_EVENT_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_EVENT_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            }
        }
        case FETCH_EVENT_FAILURE: {
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            }
        }
        default: return {...state}
    }
}