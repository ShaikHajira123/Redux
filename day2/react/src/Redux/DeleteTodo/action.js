
export const DELETE_TODO = 'DELETE_TODO'

export const deleteTodo=(data)=>{
    return {
        type:DELETE_TODO,
        payload:data,
    }
}