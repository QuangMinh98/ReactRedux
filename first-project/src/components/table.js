import React, { useState } from 'react'
import { Table } from 'antd'
import store from "../store";

const users = [
    {
        email: 'quangminh.bd01@gmail.com',
        name: 'Quang Minh',
        phone: '0585093060'
    },
    {
        email: 'tiende1@gmail.com',
        name: 'Văn Tiến',
        phone: '0932512845'
    }
]

const cols = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: {
            compare: (a, b) => a.name.length - b.name.length,
            multiple: 2,
        }
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    }
]

export default function Main(props) {
    const [userList, setUserList] = useState(users)
    store.subscribe(()=>{
        console.log(store.getState())
        setUserList(store.getState())
    })
    return <Table dataSource={userList} columns={cols}/>
}