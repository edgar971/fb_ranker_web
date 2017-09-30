import { combineReducers } from 'redux';
import * as type from '../action/type';
import groups from "./groupsReducer"
import group from "./groupReducer"
import ajaxCallsInProgress from './ajaxStatusReducer';
import pages from './searchReducer';

const handleData = (state = {isFetching: true, data: {}}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return {...state, isFetching: true};
        case type.RECEIVE_DATA:
            return {...state, isFetching: false, data: action.data};
        default:
            return {...state};
    }
};
const httpData = (state = {}, action) => {
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        default:
            return {...state};
    }
};

export default combineReducers({
    httpData,
    groups,
    group,
    pages,
    ajaxCallsInProgress
});
