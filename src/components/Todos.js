import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { removeTodo,handleCheckbox } from "../redux/todoapp/actions";

const Todos = ( {handleEditClick,editFormVisiBility} ) => {
    // console.log(editFormVisiBility);
  const todos = useSelector((state) => state.operationsReducer); //getting current state of todo
  const dispatch = useDispatch();  


  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        {/* Only Displaying when we are not updating a task */}
        {editFormVisiBility===false&&(
        <input className=" mt-0 form-check-input" type="checkbox" checked={todo.completed}
        onChange={()=>dispatch(handleCheckbox(todo.id))}
        ></input>
        )}
        <p
        // To Mark the task is done
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo} 
        </p>
      </div>
      <div className="actions-box">
        {/* Only showing when task is not updating */}
        {editFormVisiBility===false&&(
<>
            <span onClick={()=>handleEditClick(todo)} >
          <Icon icon={edit2} />
        </span>
        <span onClick={()=>dispatch(removeTodo(todo.id))} >
          <Icon icon={trash} />
        </span>
</>
          )}
      </div>
    </div>
  ));
};

export default Todos;
