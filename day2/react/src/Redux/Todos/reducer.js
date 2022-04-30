
import {ADD_TODOS} from './action'


const init= { todos:[] }

export const todosReducer=(store = init,{type,payload})=>{
    switch(type){
            
        case ADD_TODOS:
            return {...store,todos:[...store.todos,payload]}    
        case SORT :
            return {...store, todos:[...store.todos].sort((a,b)=>(
                a[payload]>b[payload] ? 1 : a[payload]<b[payload] ?-1:0
            ))}
            default:
                return store
    }
}

