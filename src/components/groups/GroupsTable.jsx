/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Link } from 'react-router';
import { Table } from 'antd';

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Action', dataIndex: 'id', key: 'id', render: (text, record) => <Link to={`/app/dashboard/groups/${record.id}`}>View</Link> },
];


const GroupsTable = ({groups}) => {

    return (
        <Table
            columns={columns}
            rowKey="id"
            expandedRowRender={group => <p>{group.description}</p>}
            dataSource={groups}
        />
    )
};

export default GroupsTable;