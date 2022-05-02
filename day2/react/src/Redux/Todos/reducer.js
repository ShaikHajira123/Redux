
import {ADD_TODOS, DELETE_TODO} from './action'
import {TOGGLE_TODO} from './action'
import {SORT } from './action'

const init= { todos:[] }

export const todosReducer=(store = init,{type,payload})=>{
    switch(type){
            
        case ADD_TODOS:
            return {...store,todos:payload}    
        case SORT :
            return {...store, todos:[...store.todos].sort((a,b)=>
                a[payload]>b[payload] ? 1 : a[payload]<b[payload] ?-1:0
            ),
        };
        // case FILTER :
        //     return {
        //     ...store, 
        //        // todos:store.todos.filter((e)=>e.title.includes(payload))
            
        // }
         case DELETE_TODO:
            return {
                ...store,
                todos:store.todos.filter((el)=>el.id !== payload)
            };
            case TOGGLE_TODO:
            return {
                ...store,
                todos:store.todos.map((e)=>e.id === payload ?  {status :!e.status} : e ),
            };
            default:
                return {...store}
    }
}

