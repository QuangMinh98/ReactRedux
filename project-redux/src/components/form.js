import { Form, Input, Button, Select, TimePicker } from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import moment from 'moment';

const format = 'HH:mm';
const { Option } = Select;

export default function FormToDo(props){
    

    const dispatch = useDispatch()

    const onStatusChange = (value) => {

    }

    const onFinish = (value) => {
        value.id = Date.now()
        let date = new Date()
        value.date = date.toLocaleDateString()+ ' ' + date.toLocaleTimeString()
        value.time = value.time.format('hh:mm')
        console.log(value)
        dispatch({
            type: 'CreateTask',
            todo: value
        })
    }

    return(
        <Form name="control-ref" onFinish={onFinish}>
            <Form.Item
                name="task"
                label="Task"
                rules={[
                    {
                    required: true,
                    },
                ]}
                >
                <Input />
            </Form.Item>
            <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={onStatusChange}
                    allowClear
                >
                    <Option value="To Do">To Do</Option>
                    <Option value="In Progress">In Progress</Option>
                    <Option value="Success">Success</Option>
                </Select>
            </Form.Item>
            <Form.Item name="time" label="Time" rules={[{ required: true }]}>
                <TimePicker defaultValue={moment('12:00', format)} format={format} />
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
    )
}