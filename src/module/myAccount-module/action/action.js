export const GET_ACCOUNT_PROFILE_REQUEST = 'GET_ACCOUNT_PROFILE_REQUEST';
export const GET_ACCOUNT_PROFILE_SUCCESS = 'GET_ACCOUNT_PROFILE_SUCCESS';
export const GET_ACCOUNT_PROFILE_FAILED = 'GET_ACCOUNT_PROFILE_FAILED';

export const UPDATE_ACCOUNT_PROFILE_BY_ID_REQUEST = 'UPDATE_ACCOUNT_PROFILE_BY_ID_REQUEST';
export const UPDATE_ACCOUNT_PROFILE_BY_ID_SUCCESS = 'UPDATE_ACCOUNT_PROFILE_BY_ID_SUCCESS';
export const UPDATE_ACCOUNT_PROFILE_BY_ID_FAILED = 'UPDATE_ACCOUNT_PROFILE_BY_ID_FAILED';
//
// export const UPDATE_ACCOUNT_PASSWORD_REQUEST = 'UPDATE_ACCOUNT_PASSWORD_REQUEST';
export const UPDATE_ACCOUNT_PASSWORD_SUCCESS = 'UPDATE_ACCOUNT_PASSWORD_SUCCESS';
export const UPDATE_ACCOUNT_PASSWORD_FAILED = 'UPDATE_ACCOUNT_PASSWORD_FAILED';



export const UPDATE_ACCOUNT_PASSWORD_REQUEST = 'UPDATE_ACCOUNT_PASSWORD_REQUEST';
export const updateAccountPasswordRequest = ({ reqData = {}, onSuccessData, onErrorData }) => ({
    type: UPDATE_ACCOUNT_PASSWORD_REQUEST,
    payload: {
        reqData,
        onSuccess: onSuccessData,
        onError: onErrorData,
    }
})