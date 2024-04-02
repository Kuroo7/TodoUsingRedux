// This tell redux how to perform a action
// we will declare State here
import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO } from "../actions";

const initialState = [
  { id: 1, todo: "Buy Mattress", completed: false },
  { id: 2, todo: "Go Gym", completed: false },
  { id: 3, todo: "Study Redux", completed: true },
]; // Created some dummy data

export const operationsReducer = (state = initialState, action) => {
  // Action we get from file index.js which is present in todoapp/actions folder
  // From action we will get type and payload

  switch (action.type ){ //Selecting which action to perform
    case ADD_TODO://Adding todo
        return [...state,action.payload]

    case DELETE_ALL://Deleting all todos
        return []

    case REMOVE_TODO: //Deleting a single todo
        const filteredTodos = state.filter((todo)=>todo.id!==action.payload)
        return filteredTodos

    case UPDATE_TODO://Updating a single todo
        let data = action.payload
        const updatedArray=[];
        state.map((item)=>{
            if(item.id===data.id){
                item.id=data.id;
                item.todo=data.todo;
                item.completed=data.completed;
            }
            updatedArray.push(item);
        })
        return updatedArray;

    case UPDATE_CHECKBOX:// Giving the capability to mark task
        let todoArray=[];
        state.map((item)=>{
            if(item.id===action.payload){
                item.completed=!item.completed;
            }
            todoArray.push(item)
        })
    return todoArray
    
    default: return state;
  }
};


