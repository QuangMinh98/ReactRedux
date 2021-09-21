import React,{Component} from 'react';

const users = [
    {
        email: 'quangminh.bd01@gmail.com',
        name: 'Quang Minh',
        phone : '0585093060'
    },
    {
        email: 'tiende1@gmail.com',
        name: 'Văn Tiến',
        phone : '0932512845'
    }
]

export default function home(){
    return <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => { 
                return (
                    <tr>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>                         
                    </tr>
                )
            })}           
        </tbody>
    </table>
}