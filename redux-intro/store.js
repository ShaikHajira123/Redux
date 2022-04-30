


import { todosReducer } from './reducer.js';

const initState = {
    todos:[],
}
export const store = Redux.createStore(todosReducer,initState)

