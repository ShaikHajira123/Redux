
import './App.css'
import {Counter } from './components/Counter'
import {Todos } from './components/Todos'
//import {DeleteTodo} from './components/DeleteTodo'

function App() {
  
  return (
    <div className="App">
     <Counter />
     <Todos />
     {/* <DeleteTodo /> */}
 </div>
  )
}

export default App
