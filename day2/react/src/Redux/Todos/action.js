
export const ADD_TODOS = 'ADD_TODOS'
export const SORT = 'SORT'
export const addTodos=(data)=>{
    return {
        type:ADD_TODOS,
        payload:data
    }
}

export const getTodos = async(dispatch)=>{
   const data = await fetch(`http:''loaclhost:8080/todos`)
    .then((x)=>x.json())
    
    dispatch(addTodos(data))
}

export const sort =(by)=>{
    return{
        type:SORT,
        payload:by
    }
}