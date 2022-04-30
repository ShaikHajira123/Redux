

import {ADD_TODO} from './action.js'
import { DELETE_TODO } from './action.js'

export const todosReducer = (store ,action) => {
    switch(action.type){
       case ADD_TODO: 
         return {...store,todos:[...store.todos,action.payload]} 
        case DELETE_TODO:
            return {
                ...store,todos:[...store.todos.filter((e)=>{
                    return e.title !== action.payload.title
                })]
            }
         default:
             return store
    }
}