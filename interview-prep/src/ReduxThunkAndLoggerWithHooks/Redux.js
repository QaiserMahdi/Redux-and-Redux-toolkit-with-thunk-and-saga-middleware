import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "./actions";

function ReduxThunkAndLoggerWithHooks() {
    const state = useSelector((state) => state.userReducer);
    const { loading, users, error } = state;

    const dispatch = useDispatch();

    const fetchUsers = () => {
        dispatch(fetchUserRequest(true));
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((response) => {
            if (response && response?.length > 0) {
                dispatch(fetchUserSuccess(response))
            }
            else {
                dispatch(fetchUserFailure("Error! Users not found"))
            }
            dispatch(fetchUserRequest(false));
        })
    }

    useEffect(() => {
        fetchUsers()
    }, [dispatch]);
    return (
        <div>
            <h1>Redux Thunk and Logger Middleware</h1>
            <div>{
                loading ? "Loading users data" : <ul>{users && users.map((user) => {
                    return (
                        <li>{user.username}</li>
                    )
                })}</ul>}
            </div >
        </div>
    )
}

export default ReduxThunkAndLoggerWithHooks;