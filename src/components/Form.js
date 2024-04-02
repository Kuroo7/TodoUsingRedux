import React, { useState,useEffect } from "react";
import {useDispatch} from 'react-redux';
import { addTodo,handleEditSubmit } from "../redux/todoapp/actions";


const Form = ({editFormVisiBility,editTodo,cancelUpdate}) => {
    const [ todovalue,setTodoValue ] =useState("");
    const [ editValue,setEditValue ] =useState("");

    //Use effect to update task
    useEffect(()=>{
setEditValue(editTodo.todo)
    },[editTodo])
    
    const dispatch = useDispatch()

    
    const handleSubmit=(e)=>{ //Function to create a task
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj={
            id:time,
            todo:todovalue,
            completed:false
        }
        setTodoValue('');
        dispatch(addTodo(todoObj))

    }

    const editSubmit=(e)=>{ //Function to update a task
        e.preventDefault();
        let editedObj={
            id:editTodo.id,
            todo: editValue,
            completed:false

        }
        dispatch(handleEditSubmit(editedObj))
    }

  return (
    <>
    {editFormVisiBility===false?(
        <form className="form-group custom-form" onSubmit={handleSubmit}>
      <label> Add your todo-item </label>
      <div className="input-and-btn" >

      <input
        type="text"
        className="form-control"
        required
        value={todovalue}
        onChange={(e) => setTodoValue(e.target.value)}
        />
      <button type="submit" className="btn btn-secondary btn-md">
        Add
      </button>
        </div>
    </form>
        ):(
            <form className="form-group custom-form"  onSubmit={editSubmit}  >
            <label> Update your todo-item </label>
            <div className="input-and-btn" >
      
            <input
              type="text"
              className="form-control"
              required
              value={editValue||""}
              onChange={(e)=>setEditValue(e.target.value)}
              />
            <button type="submit" className="btn btn-secondary btn-md">
              UPDATE
            </button>
              </div>
              <button className="btn btn-primary btn-md back-btn" onClick={cancelUpdate} >BACK</button>
          </form>
        )}
        </>
    
  );
};

export default Form;
