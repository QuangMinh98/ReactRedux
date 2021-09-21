import { createStore } from "redux"; //an import from the redux library
import reducer from "../reducers";
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
const store = createStore(reducer,users);  // an incomplete solution - for now.

export default store