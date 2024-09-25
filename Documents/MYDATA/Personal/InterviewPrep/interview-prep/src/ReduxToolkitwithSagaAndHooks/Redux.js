import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_USER_REQUEST } from './userSlice';

const ReduxToolkitwithSagaAndHooks = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.userReducer);
    const { users, loading, error } = state

    useEffect(() => {
        dispatch({ type: FETCH_USER_REQUEST }); // Dispatch action to fetch users
    }, [dispatch]);

    return (
        <div>
            <h2>User List</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReduxToolkitwithSagaAndHooks;

