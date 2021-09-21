import { Form, Input, Button, Select } from 'antd';
import Table from './table'

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const onFinish = (values) => {
    console.log(values)
}

export default function form(props){
    return(
        <Form name="control-ref" onFinish={props.AddUser}>
            <Form.Item
                name="name"
                label="Name"
                rules={[
                    {
                    required: true,
                    },
                ]}
                >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                    required: true,
                    },
                ]}
                >
                <Input />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone"
                rules={[
                    {
                    required: true,
                    },
                ]}
                >
                <Input />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={props.ClearUser}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    )
}