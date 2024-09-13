export const FETCH_REGISTER_PROCESS_DATA_REQ = 'FETCH_REGISTER_PROCESS_DATA_REQ';
export const getFetchRegisterProcessData = ({ reqData = {}, onSuccessData, onErrorData }) => ({
    type: FETCH_REGISTER_PROCESS_DATA_REQ,
    payload: {
        reqData,
        onSuccess: onSuccessData,
        onError: onErrorData,
    }
})
//
export const UPDATE_REGISTER_PROCESS_DATA_REQ = 'UPDATE_REGISTER_PROCESS_DATA_REQ';
export const updateFetchRegisterProcessData = ({ reqData = {}, onSuccessData, onErrorData }) => ({
    type: UPDATE_REGISTER_PROCESS_DATA_REQ,
    payload: {
        reqData,
        onSuccess: onSuccessData,
        onError: onErrorData,
    }
})
//