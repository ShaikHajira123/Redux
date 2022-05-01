import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {sort} from '../Redux/Todos/action'
import { getTodos } from '../Redux/Todos/action'
import {Link } from 'react-router-dom'
import { Navigate } from "react-router-dom"
// import {filter} from '../Redux/Todos/action'
import { deleteTodo,toggleTodo } from "../Redux/Todos/action"

import {nanoid} from 'nanoid'


export const Todos =() => {
const todos=  useSelector((store)=>store.todos.todos)
const dispatch = useDispatch()

const [text , setText] = useState([])
const [filter,setFilter] =useState("")

const handleAdd = ()=> {
    
        const payload={
            title:text,
            status:true,
            id:nanoid(1),
    }

    fetch(`http://localhost:8080/todos`,{
        body:JSON.stringify(payload),
        headers:{
       "content-type":"application/json"
        },
        method:'POST'
    })
    .then(()=>setText(""))
    .then(()=>(
        dispatch(getTodos())
    ))
    
}

useEffect(()=>{
    dispatch(getTodos())
    
},[])
 
const authed = localStorage.getItem('authenticates')
      
// if(authed ===false){
//     return <Navigate to ={'/login'}/>
// }

//  const getData = ()=>{
//   fetch(`http://localhost:8080/todos`)
//     .then((x)=>x.json())
//     .then((data)=>{
//     dispatch(addTodos(data))
//     })
// }
   
    
    return (
      
    <div>
        <Link to={'/login'}>
        <h4>login</h4>
        </Link>
        
      <h1>TODOS LIST</h1>
        <input type="text" placeholder="filter todos"
        onChange={(e)=>{
           // dispatch(filter(e.target.value))
           setFilter(e.target.value)
        }} />
        <select onChange={(e)=>{
            dispatch(sort(e.target.value))
        }}>
            <option value="id">Sort id</option>
            <option value="status">Sort status</option>
            <option value="title">Sort by title</option>
        </select>

       <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
       <button onClick={()=>{handleAdd()}}>Add Todo</button>

      {todos.filter(todo=>todo.title.includes(filter)).map((todo)=>{
        
          return (
            <div>
                {authed===true ?
       <Link to={`/todo/${todo.id}`}>
            <h3 key={todo.title}>{todo.id}.{todo.title}- </h3>
                </Link> :  <Link to={`/login`}>
            <h3 key={todo.title}>{todo.id}.{todo.title}- </h3></Link>}
            

           
                {todo.status?"completed":"notcompleted"}
                <button onClick={()=>{
         dispatch(deleteTodo(todo.id))
          }}>Delete</button>

      <button onClick={()=>{
         dispatch(toggleTodo(todo.id))
      }}>Toggle</button>
                </div>
          )
           


          
      }
          
        )}
    
    </div>
    )
}
