export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";

export const fetchUserRequest = (e) => {
    return {
        type: FETCH_USER_REQUEST,
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}