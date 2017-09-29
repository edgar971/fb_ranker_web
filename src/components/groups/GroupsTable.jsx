/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table } from 'antd';

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Action', dataIndex: '', key: 'x', render: () => <a>View</a> },
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