


import {legacy_createStore as createStore ,combineReducers,  applyMiddleware} from 'redux'
import { productReducer } from './Product/reducer'
import { authReducer } from './Auth/reducer'

const rootReducer = combineReducers({
  products:productReducer,
  isauth:authReducer,
   
})


const middleware = (store) => (next) => (action) => {
  console.log(action)
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


store.subscribe(()=>{
  console.log(store.getState())
})