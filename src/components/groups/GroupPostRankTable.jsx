/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table } from 'antd';

const columns = [
    { title: 'Rank', dataIndex: 'rank', key: 'rank' },
    { title: 'Page', dataIndex: 'name', key: 'name' },
    { title: 'Post Type', dataIndex: 'type', key: 'type' },
    { title: 'Text', dataIndex: 'content', key: 'content' },
    { title: 'Likes', dataIndex: 'likes', key: 'likes' },
    { title: 'Comments', dataIndex: 'comments', key: 'comments' },
    { title: 'Shares', dataIndex: 'shares', key: 'shares' },
];


const data = [];
const item = {
    rank: 1,
    name: "Festival",
    type: "video",
    content: "Thank you everyone for a great day!",
    likes: 210,
    comments: 123,
    shares: 11
};

for (let i = 0; i < 50; i ++) {
    data.push(item);
}

const GroupRankTable = () => {

    return (
        <Table
            columns={columns}
            rowKey="id"
            dataSource={data}
        />
    )
};

export default GroupRankTable;