
import './App.css'
import {Counter } from './components/Counter'
import {Todos } from './components/Todos'
import {Routes,Route} from 'react-router-dom'
import {TodoDetails} from './components/TodoDetails'

function App() {
  
  return (
    <div className="App">
    {/* <Counter /> */}
  
     <Routes>
     <Route path='/' element={<Todos />}></Route>
     <Route path='/todo/:id' element={<TodoDetails/>}></Route>
     </Routes>
     
     {/* <DeleteTodo /> */}
 </div>
  )
}

export default App
