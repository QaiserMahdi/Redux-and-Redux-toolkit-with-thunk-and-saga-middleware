import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "./actions";

function ReduxSagaWithHooks() {
    const state = useSelector((state) => state.userReducer);
    const { loading, users, error } = state;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserRequest());
    }, [dispatch]);
    return (
        <div>
            <h1>Redux Saga Middleware</h1>
            <div>{
                loading ? "Loading users data" : <ul>{users && users.map((user) => {
                    return (
                        <li key={user.id}>{user.username}</li>
                    )
                })}</ul>}
            </div >
        </div>
    )
}

export default ReduxSagaWithHooks;