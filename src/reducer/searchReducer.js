import * as types from '../action/types';
import initialState from './initialState';

export default function searchReducer(state = initialState.pages, action) {
    switch (action.type) {
        case types.LOAD_SEARCH_PAGES_SUCCESS:
            return action.pages;
        default:
            return state;
    }
}
