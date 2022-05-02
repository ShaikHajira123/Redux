
import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Navigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import {isAuth} from '../Redux/Auth/action';
import axios from 'axios'


export const Login = () => {
    const userauth = useSelector((store)=>store.isauth.isauth)
    const navigate = useNavigate()
    const dispatch =useDispatch()

    

    const [form , setForm] =useState({
        username:"",
        password:"",
        
    })
    const handleChange = (e)=>{
        const {name,value} = e.target
        setForm({...form,
            [name]:value
            })
    }

  
 
    const handleSubmit = (e) => {
       e.preventDefault();
       axios.get("http://localhost:8080/users").then((data) => {
          data.data.map((item) => {
             // console.log(item);
             if (
                item.username === form.username &&
                item.pass === form.password
             ) {
                // console.log(item);
                dispatch(isAuth({ isAuth: true }));
                console.log(item.role);
                if (item.role === "admin") {
                   navigate("/orders");
                } else if(item.role==="client"){
                   navigate("/neworder");
                }
             }
          });
       });
    };
   


    return (
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit" onClick={handleSubmit}>Login</button>
      </div>
    );
  };