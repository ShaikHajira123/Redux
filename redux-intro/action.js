


export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = 'DELETE_TODO'

export  const AddTodo = (title, status) => {
   return {
      type: ADD_TODO,
      payload: {
         title: title,
         status: status,
      },
   };
};


export const DeleteTodo = (title,status) => {
    return {
        type:DELETE_TODO,
        payload:{
            title:title,
            status:status,
        }
    }
}
