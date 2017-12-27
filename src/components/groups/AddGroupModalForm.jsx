/**
 * Created by hao.cheng on 2017/4/15.
 */

import React, { Component } from 'react';
import { Button, Modal, Form, Input } from 'antd';
const FormItem = Form.Item;

const AddGroupModalForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="Create a new Group"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="Name">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Name is required'}],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Description">
                        {getFieldDecorator('description')(<Input type="textarea" />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

class AddGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };

        this.addGroup = this.props.addGroup;
        this.loadGroups = this.props.loadGroups;
    }

    showModal = () => {
        this.setState({ visible: true });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            this.addGroup(values).then(() => {
                form.resetFields();
                this.loadGroups();
                this.setState({ visible: false });
            });

        });
    };
    saveFormRef = (form) => {
        this.form = form;
    };
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Add Group</Button>
                <AddGroupModalForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

export default AddGroup;