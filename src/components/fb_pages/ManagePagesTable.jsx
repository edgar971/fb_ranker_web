import React, { Component } from 'react';

import { Table, Popconfirm, Button } from 'antd';

class ManagePagesTable extends Component {

    constructor(props) {
        super(props);

        this.columns = [
            {
                title: 'Image',
                dataIndex: 'page_id',
                render: (text, page) => {
                    return (
                        <img src={`http://graph.facebook.com/${page.page_id}/picture`} width="50px" alt={page.name} />
                    )
                }
            },
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Fan Count',
                dataIndex: 'fan_count',
            },
            {
                title: 'Operation',
                dataIndex: 'operation',
                render: (text, page) => {
                    return (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(page.page_id)}>
                            <Button>Delete</Button>
                        </Popconfirm>
                    );
                },
            }];

    }

    onDelete = (key) => {
        console.log(key);
        // const dataSource = [...this.state.dataSource];
        // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    };

    render() {
        const columns = this.columns;
        return (
            <div>
                <Table bordered
                       dataSource={this.props.pages}
                       rowKey="page_id" columns={columns}
                       expandedRowRender={page => <p>{page.about}</p>}
                />
            </div>
        );
    }
}

export default ManagePagesTable;