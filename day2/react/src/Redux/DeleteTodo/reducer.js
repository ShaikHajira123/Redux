

import { DELETE_TODO } from './action'

const init= {counter : 0, todos:[]}

export const counterReducer=(store = init,{type,payload})=>{
    switch(type){
           
        case DELETE_TODO:
            return {...store , todos:store.todos.filter(e=>
                 e.title!==payload.title
            ) }
            default:
                return store
    }
}