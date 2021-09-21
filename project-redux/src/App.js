import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import ToDo from './components/todo'
import FormToDo from './components/form'

function App() {
  // const counter = useSelector((state) => state.counter)
  // const dispatch = useDispatch()
  return (
    <div className="App">
      {/* <h1>Counter: {counter}</h1>
      <button onClick={() => {dispatch({type: 'Increment'})}}>Add</button>
      <button onClick={() => {dispatch({type: 'Descrement'})}}>Des</button> */}
      <FormToDo />
      <ToDo />
    </div>
  );
}

export default App;
