import {
    FETCH_USER_LOADING,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from "./userType"

const initialState = {
    loading: false,
    users: [],
    error: '',
}

export const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USER_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: '',
            }
        }
        case FETCH_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                user: [],
                error: action.payload,
            }
        }
        default: return {...state}
    }
}