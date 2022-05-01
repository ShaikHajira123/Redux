import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {isAuth} from '../Redux/Auth/action';


export const Login = () => {
    const userauth = useSelector((store)=>store.isauth.isauth)
    const navigate = useNavigate()
    const dispatch =useDispatch()

    localStorage.setItem('authenticates',userauth)

    const [form , setForm] =useState({
        email:"",
        password:""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target
        setForm({...form,
            [name]:value
            })
    }

    const handleSubmit = (e)=>{
        e.preventDefault ()
        getData()
    }

    const getData = async () => {
      let data = await fetch(`https://reqres.in/api/login`,{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(form)
      })
      data = await data.json()

      if(data.error === 'Missing email or username'){
          alert ("username or password field is empty")

      }else{
          localStorage.setItem("authenticate token",data.token)
          dispatch(isAuth({isauth:true}))
          navigate(-1,{replace:true})
      }
    }




    return (

    <div>
        <form action=""onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Enter Email'
            name="email"
            onChange={handleChange}
                />
            <input type="text"
            placeholder='Enter password' 
            name="password"
            onChange={handleChange}/>
            <input type="submit" value="submit" />
        </form>
    </div>
    )
} 