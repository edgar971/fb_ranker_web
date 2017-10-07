import * as types from '../action/types';
import initialState from './initialState';

export default function groupReducer(state = initialState.group, action) {
    switch (action.type) {
        case types.LOAD_GROUP_SUCCESS:
            return { ...state, ...action.group } ;
        case types.LOAD_GROUP_PAGES_SUCCESS:
            return { ...state, pages: action.pages };
        case types.LOAD_GROUP_POSTS_REPORT_SUCCESS:
            return { ...state, posts_report: action.report };
        default:
            return state;
    }
}
