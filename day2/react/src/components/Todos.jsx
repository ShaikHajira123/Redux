import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {addTodos} from '../Redux/action'
import { getTodos } from '../Redux/Todos/action'

export const Todos =() => {
const todos=  useSelector(store=>store.todos.todos)
const dispatch = useDispatch()

const [text , setText] = useState('')

const handleAdd = ()=> {
    
        const payload={
            title:text,
            status:false
    }

    fetch(`http://loaclhost:8080/todos`,{
        body:JSON.stringify(payload),
        headers:{
       "content-type":"application/json"
        },
        method:'POST'
    })
    .then(()=>setText(""))
    .then(()=>{
        dispatch(getTodos())
    })
}

useEffect(()=>{
    dispatch(getTodos())
    
},[])

//  const getTodos = async()=>{
//     const data= await fetch(`http://loaclhost:8080/todos`)
//     .then((x)=>x.json())
//     .then((data)=>{
//     dispatch(addTodos(data))
//     })
// }
    
    return (

    <div>
        <select onChange={(e)=>{
            dispatch(sort(e.target.value))
        }}>
            <option value="id">Sort id</option>
            <option value="status">Sort status</option>
        </select>
       <input type="text" onChange={(e)=>setText(e.target.value)}/>
       <button onClick={handleAdd}>Add Todo</button>
      {todos.map((t)=>(
          <div key={t.title}>{t.title}-{t.status?"Done" : "Not done"}</div>
      ))}
    
    </div>
    )
}
