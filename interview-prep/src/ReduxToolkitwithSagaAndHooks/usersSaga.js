import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_USER_REQUEST, fetchUserFailure, fetchUserSuccess } from "./userSlice";
function* fetchUsersSaga() {
    try {
        const response = yield call(fetch, "https://jsonplaceholder.typicode.com/users")
        const result = yield response.json();
        yield put(fetchUserSuccess(result));
    }
    catch (err) {
        yield put(fetchUserFailure(err));
    }
}

function* watchFetchUsers() {
    yield takeLatest(FETCH_USER_REQUEST, fetchUsersSaga);
}

export default watchFetchUsers;