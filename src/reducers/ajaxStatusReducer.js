import * as types from '../actions/types';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {
    if (action.type === types.START_AJAX_CALL) {
        return state + 1;
    } else if (action.type === types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }
    return state;
}