import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from './store';
import { fetchUsers } from "./userSlice";

function ReduxToolkitWithMiddlewares() {
    const loading = useSelector((state) => {
        return state.userReducer.loading

    });
    const users = useSelector((state) => {
        return state.userReducer.usersData

    });
    const error = useSelector((state) => {
        return state.userReducer.error

    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div>
            <h1>Redux Toolkit with thunk Middleware</h1>
            {loading && <p>Fetching Users Data</p>}
            {error && <p>Error in Fetching Users Data</p>}
            {users && users?.length > 0 &&
                <ul>
                    {users.map((user) => <li key={user.id}>{user.username}</li>)}
                </ul>}
        </div>
    )
}

export default ReduxToolkitWithMiddlewares;