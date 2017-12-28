import * as types from '../actions/types';

export default function groupsReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_GROUPS_SUCCESS:
            return action.groups;
        default:
            return state;
    }
}
