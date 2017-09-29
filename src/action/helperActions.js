import { push as pushRouter} from 'react-router-redux'


export function push(location){
    return function(dispatch) {
        dispatch(pushRouter(location));
    }
}