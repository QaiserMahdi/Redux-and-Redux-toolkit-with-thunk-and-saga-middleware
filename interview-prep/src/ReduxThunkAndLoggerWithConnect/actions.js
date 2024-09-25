export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";

export const fetchUserRequest = (e) => {
    return {
        type: FETCH_USER_REQUEST,
        payload: e
    }
}

export const fetchUserSuccess = (e) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: e
    }
}

export const fetchUserFailure = (e) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: e
    }
}