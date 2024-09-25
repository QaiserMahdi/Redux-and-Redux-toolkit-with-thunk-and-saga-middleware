import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./actions";

const initialState = {
    loading: false,
    users: [],
    error: ""
};

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USER_REQUEST: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case FETCH_USER_SUCCESS: {
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        }
        case FETCH_USER_FAILURE: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        default: return state;
    }
}