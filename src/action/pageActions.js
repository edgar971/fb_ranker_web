import * as types from './types';
import {startAjaxCall, ajaxCallError} from './ajaxStatusActions';
import FBRankerAPI from '../integrations/FBRankerAPI';

export function pageSearchSuccess(pages) {
    return {
        type: types.LOAD_SEARCH_PAGES_SUCCESS,
        pages
    }
}

export function pageSearch(query){
    return function(dispatch, getState) {
        dispatch(startAjaxCall());
        return FBRankerAPI.search(query).then((res) => {
            dispatch(pageSearchSuccess(res.data.data));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    }
}