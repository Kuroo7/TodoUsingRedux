// This tells redux which action to perform 
// This contain Payload which is piece of data and type
//  the type and payload is passed to reducers
// Payload we will get from our component 


export const ADD_TODO ='ADD_TODO'
export const DELETE_ALL ='DELETE_ALL'
export const REMOVE_TODO ='REMOVE_TODO'
export const UPDATE_TODO ='UPDATE_TODO'

export const UPDATE_CHECKBOX ='UPDATE_CHECKBOX'


export const addTodo=(payload)=>{  //Function to add todo
    return{
        type:ADD_TODO,
        payload
    }
}
export const deleteAll = ()=>{ //Function to delete all todo
    return{
        type:DELETE_ALL
    }
}
export const removeTodo=(payload)=>{ //Function to remove a single todo
    return{
        type:REMOVE_TODO,
        payload
    }
}
export const handleEditSubmit=(payload)=>{
    return{
        type:UPDATE_TODO,
        payload
    }
}
export const handleCheckbox=(payload)=>{ //Function to mark completed task
    return{
        type:UPDATE_CHECKBOX,
        payload
    }
}
