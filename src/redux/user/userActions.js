import axios from "axios"
import {
    FETCH_USER_LOADING,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from "./userType"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_LOADING
    }

}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }

}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }

}

// export const fetchUsers = () => {
//     return (dispatch) =>{
//         dispatch(fetchUsersRequest())
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             const user = response.data
//             dispatch(fetchUsersSuccess(user))
//         })
//         .catch(error => {
//             const errorMsg = error.message
//             dispatch(fetchUsersFailure(error))
//         })
//     }
// }