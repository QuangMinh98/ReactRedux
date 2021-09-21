import React, { useState } from 'react'
import logo from './logo.svg';
import Home from './components/home'
import Table from './components/table'
import Form from './components/form'
import "antd/dist/antd.css";
import './App.css';
// import { createStore } from "redux"; //an import from the redux library
// const initialState = { tech: "React " };
// const store = createStore(reducer,initialState);  // an incomplete solution - for now.
import store from "./store";

const onClick = (user) =>{
  console.log("onClick")
  console.log(store.getState())
  store.dispatch({type: "Clicked", user: user})
}

const onClear = () =>{
  store.dispatch({type: "Clear"})
}

// const users = [
//   {
//       email: 'quangminh.bd01@gmail.com',
//       name: 'Quang Minh',
//       phone: '0585093060'
//   },
//   {
//       email: 'tiende1@gmail.com',
//       name: 'Văn Tiến',
//       phone: '0932512845'
//   }
// ]

function App() {
  // const [userList, setUserList] = useState(users)
  // function AddUser(user) {
  //   let newUserList = [
  //     user,
  //     ...userList
  //   ]
  //   console.log(newUserList)
  //   setUserList(newUserList)
  // }
  return (
    <div className="App">
      <div className="content">
        <Form AddUser={onClick} ClearUser={onClear}/>
        <Table />
        {/* <button onClick={onClick}>Change</button>
        <h1>{store.getState().tech}</h1> */}
      </div>
    </div>
  );
}

export default App;
