import React, { useState } from 'react';
import {Table, Tag, Space} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import EditModal from './modal'

export default function ToDo(props){

    const dispatch = useDispatch()

    const columns = [
        {
            title: 'Task',
            dataIndex: 'task',
            key: 'status'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time'
        },
        {
            title: 'Create Time',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                  <a onClick={()=>{
                    showModal(record)
                  }}>Edit</a>
                  <a onClick={()=>{
                    deleteItem(record)
                  }}>Delete</a>
                </Space>
            ),
        }
    ]

    const [isModalVisible, setIsModalVisible] = useState(false);

    const selectedItem = useSelector((state) => state.selectedItem)

    const todoList = useSelector((state) => state.todoList)

    function showModal(record) {
        console.log("show")
        setIsModalVisible(true)
        // dispatch({
        //     type: "SelectItem",
        //     selectedItem: record
        // })
    }

    function deleteItem(record) {
        dispatch({
            type: "DeleteTask",
            task_id: record.id
        })
    }

    function hideModal(){
        console.log("hide")
        setIsModalVisible(false)
    }

    return (
        <>
            <Table dataSource={todoList} columns={columns} />
            <EditModal isModalVisible={isModalVisible} handleCancel={hideModal} selectedItem={selectedItem}/>
        </>
    )
}