import React from 'react';
import { Table } from 'antd';


const GroupPostRankTable = ({report}) => {

    const columns = [
        {
            title: 'Rank',
            dataIndex: 'rank',
            key: 'rank',
            sorter: (a, b) => a.rank - b.rank,
        },
        { title: 'Page', dataIndex: 'name', key: 'name' },
        { title: 'Post Type', dataIndex: 'type', key: 'type' },
        { title: 'Text', dataIndex: 'message', key: 'message', width: "30%" },
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

    report.forEach(page => {
        if(!page.posts.data) {
            return;
        }
        page.posts.data.forEach(post => {
            data.push({
                id: post.id,
                name: page.name,
                type: "post",
                likes: post.likes,
                message: post.message,
                comments: post.comments,
                shares: post.shares
            });
        })
    });

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