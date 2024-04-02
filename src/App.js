import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";
import {useDispatch,useSelector} from 'react-redux'
import { deleteAll } from "./redux/todoapp/actions";
import { useState } from "react";

function App() {
  const dispatch = useDispatch() //Used to dispatch an action
  const todos = useSelector((state) => state.operationsReducer);//Getting the current state of todos

  const [editFormVisiBility,setEditFormVisiBility] = useState(false)

  const [editTodo,setEditTodo]=useState('')

  const handleEditClick=(todo)=>{
    setEditFormVisiBility(true);
    setEditTodo(todo)
  }

  const cancelUpdate=()=>{
    setEditFormVisiBility(false)
  }

  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center"> TODO-APP USING REACT-REDUX </h1>
      <Form cancelUpdate={cancelUpdate}   editFormVisiBility={editFormVisiBility} editTodo={editTodo} />
      <Todos handleEditClick={handleEditClick} editFormVisiBility={editFormVisiBility} />
{todos.length>1&&(
  <button onClick={()=> dispatch(deleteAll()) }  className="btn btn-danger btn-md delete-all " >Delete All</button>
)}
    </div>
  );
}

export default App;
