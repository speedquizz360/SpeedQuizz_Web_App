/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import { call, put, takeLatest } from 'redux-saga/effects';
import fetchClient from 'src/api/fetchClient';
import apiUrl from 'src/constant/common/apiConstant';
import {
    FETCH_REGISTER_PROCESS_DATA_REQ,
    UPDATE_REGISTER_PROCESS_DATA_REQ
} from '../action/action';

const getRegisterProcessDataRequest = (data) => {
    return fetchClient.get(`/auth/signup-images`, {}).then((auth) => {
        return auth;
    });
};

function* getRegisterProcessDataWatcher(action) {
    try {
        const response = yield call(getRegisterProcessDataRequest, action);
        action.payload.onSuccess(response);
    } catch (err) {
        action.payload.onError(err);
    }
}
//
const updateRegisterProcessDataRequest = (data) => {
    //
    return fetchClient.put(`/auth/signup-images/${data.id}`, data.request).then((auth) => {
        return auth;
    });
};

function* updateRegisterProcessDataWatcher(action) {
    try {
        const response = yield call(updateRegisterProcessDataRequest, action.payload.reqData);
        action.payload.onSuccess(response);
    } catch (err) {
        action.payload.onError(err);
    }
}
//
export default function* registerProcessSaga() {
    yield takeLatest(FETCH_REGISTER_PROCESS_DATA_REQ, getRegisterProcessDataWatcher);
    yield takeLatest(UPDATE_REGISTER_PROCESS_DATA_REQ, updateRegisterProcessDataWatcher);
}
