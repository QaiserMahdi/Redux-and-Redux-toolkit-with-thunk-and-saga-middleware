import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "./actions";

function ReduxThunkAndLoggerWithConnect({ loading, users, error, fetchUserRequest, fetchUserSuccess, fetchUserFailure }) {
    const fetchUsers = () => {
        fetchUserRequest(true);
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((response) => {
            if (response && response?.length > 0) {
                fetchUserSuccess(response)
            }
            else {
                fetchUserFailure("Error! Users not found")
            }
            fetchUserRequest(false)
        })
    }

    useEffect(() => {
        fetchUsers()
    }, []);
    return (
        <div>
            <h1>Redux Thunk and Logger Middleware with connect function</h1>
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

const mapStateToProps = (state) => ({
    loading: state.userReducer.loading,
    users: state.userReducer.users,
    error: state.userReducer.error,
});

const mapDispatchToProps = {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunkAndLoggerWithConnect);