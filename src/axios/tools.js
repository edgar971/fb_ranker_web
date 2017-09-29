
import axios from 'axios';
import { message } from 'antd';

/**
 *
 * @param url
 * @param msg
 * @param headers
 */
export const get = ({url, msg = '接口异常', headers}) =>
    axios.get(url, headers).then(res => res.data).catch(err => {
       console.log(err);
       message.warn(msg);
    });

/**
 *
 * @param url
 * @param data
 * @param msg
 * @param headers
 */
export const post = ({url, data, msg = '接口异常', headers}) =>
    axios.post(url, data, headers).then(res => res.data).catch(err => {
        console.log(err);
        message.warn(msg);
    });
