import * as types from './types';
import {startAjaxCall, ajaxCallError} from './ajaxStatusActions';
import FBRankerAPI from '../integrations/FBRankerAPI';


export function loadGroupsSuccess(groups) {
    return {
        type: types.LOAD_GROUPS_SUCCESS,
        groups
    }
}

export function loadGroupSuccess(group) {
    return {
        type: types.LOAD_GROUP_SUCCESS,
        group
    }
}

export function loadGroupPagesSuccess(pages) {
    return {
        type: types.LOAD_GROUP_PAGES_SUCCESS,
        pages
    }
}

export function addedGroupSuccess() {

    return {
        type: types.ADDED_GROUP_SUCCESS
    }
}

export function groupInProcessSuccess() {

    return {
        type: types.PROCESSED_GROUP_SUCCESS
    }

}

export function groupInProcessError() {
    return {
        type: types.PROCESSED_GROUP_ERROR
    }
}

export function loadGroups() {
    return function (dispatch, getState) {
        dispatch(startAjaxCall());
        return FBRankerAPI.getGroups().then(res => {
            let groups = res.data.data;
            dispatch(loadGroupsSuccess(groups));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    }
}

export function loadGroup(id) {
    return function (dispatch, getState) {
        dispatch(startAjaxCall());
        return FBRankerAPI.getGroup(id).then(res => {
            const group = res.data.data;
            dispatch(loadGroupSuccess(group));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    }
}

export function loadGroupPages(id) {
    return function (dispatch, getState) {
        dispatch(startAjaxCall());
        return FBRankerAPI.getGroupPages(id).then(res => {
           const pages = res.data.data;
           dispatch(loadGroupPagesSuccess(pages));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    }
}

export function addGroup(group){
    return function(dispatch, getState) {
        dispatch(startAjaxCall());
        return FBRankerAPI.addGroup(group).then(() => {
            dispatch(addedGroupSuccess());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    }
}