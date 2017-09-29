import * as types from '../action/types';
import initialState from './initialState';

export default function groupReducer(state = initialState.group, action) {
    switch (action.type) {
        case types.LOAD_GROUP_SUCCESS:
            return { ...action.group, ...state };

        case types.LOAD_GROUP_PAGES_SUCCESS:
            return { ...state, pages: action.pages };

        default:
            return state;
    }
}
