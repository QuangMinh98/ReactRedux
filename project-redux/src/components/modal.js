import React, { useState } from 'react';
import { Form, Input, Button, Select, TimePicker } from 'antd';
import {Modal} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
const format = 'HH:mm';
const { Option } = Select;

export default function EditModal(props) {
    return (
        <>
            <Modal title="Basic Modal" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
                <Form name="control-ref">
                    <Form.Item
                        name="task"
                        label="Task"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Input defaultValue={props.selectedItem.task}/>
                    </Form.Item>
                    <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            <Option value="To Do">To Do</Option>
                            <Option value="In Progress">In Progress</Option>
                            <Option value="Success">Success</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="time" label="Time" rules={[{ required: true }]}>
                        <TimePicker  format={format} />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button">
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}