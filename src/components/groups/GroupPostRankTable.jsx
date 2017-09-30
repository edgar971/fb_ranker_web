/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table } from 'antd';


const GroupPostRankTable = () => {

    const columns = [
        {
            title: 'Rank',
            dataIndex: 'rank',
            key: 'rank',
            sorter: (a, b) => a.rank - b.rank,
        },
        { title: 'Page', dataIndex: 'name', key: 'name' },
        { title: 'Post Type', dataIndex: 'type', key: 'type' },
        { title: 'Text', dataIndex: 'content', key: 'content' },
        {
            title: 'Likes',
            dataIndex: 'likes',
            key: 'likes',
            sorter: (a, b) => a.likes - b.likes,
        },
        {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
            sorter: (a, b) => a.comments - b.comments
        },
        {
            title: 'Shares',
            dataIndex: 'shares',
            key: 'shares',
            sorter: (a, b) => a.shares - b.shares
        },
    ];


    const data = [];


    for (let i = 0; i < 50; i ++) {
        const item = {
            id: i,
            rank: 1 + i,
            name: "Festival",
            type: "video",
            content: "Thank you everyone for a great day!",
            likes: 210 - i,
            comments: 123 - i,
            shares: 65 - i
        };

        data.push(item);
    }

    return (
        <Table
            columns={columns}
            rowKey="id"
            pagination={{defaultPageSize: 15}}
            dataSource={data}
        />
    )
};

export default GroupPostRankTable;