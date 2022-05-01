import {legacy_createStore as createStore , combineReducers, applyMiddleware} from 'redux'
 import { counterReducer } from './Counter/reducer'
import { todosReducer } from './Todos/reducer'


const rootReducer = combineReducers({
  counter:counterReducer,
  todos:todosReducer,
   
})


const middleware = (store) => (next) => (action) => {
  //console.log(action)
  if(typeof action ==='function'){
   return  action(store.dispatch)
  }
  next(action)
  
}
export const store = createStore(
  rootReducer,
 applyMiddleware(middleware)
 //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


// store.subscribe(()=>{
//   console.log(store.getState())
// })