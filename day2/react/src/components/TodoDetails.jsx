
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import { useDispatch } from "react-redux"
import { addTodos } from "../Redux/Todos/action"
import { deleteTodo,toggleTodo } from "../Redux/Todos/action"



export const TodoDetails =() => {

   const {id} = useParams()
    const dispatch = useDispatch()

  
    const todos = useSelector((store) => store.todos.todos)

   
       const getTodoById = ()=>{
    fetch(`http://localhost:8080/todos/${id}`)
    .then((x)=>x.json())
    .then((data)=>{
    dispatch(addTodos(data))
    })
}

    useEffect(()=>{
        getTodoById()
        
    },[])


    
        return (
            <div>
      <h1>TODO DETAILS</h1>
    
    <h2 >{todos.id}.{todos.title}-{todos.status?"completed":"notcompleted"}
 
{/* 
          <button onClick={()=>{
             dispatch(toggleTodo(todos.id))
          }}>Toggle</button> */}
      
        </h2>
    

    
      
          </div>
    )
        
}
