import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
 import { useDispatch } from "react-redux"
// import {sort} from '../Redux/Todos/action'
import { getOrders } from '../Redux/Product/action'


export const NewOrder = () => {
    const [form ,setForm] = useState({
        problem:'',
        owner_name:'',
        brand:"",

       })
    const handleChange = (e) => {
        const {name,value} = e.target 
        setForm({...form , [name]:value})
   }
    
   const handleSubmit  = (e) => {
       e.preventDefault()
       console.log(form)
       fetch(`http://localhost:8080/orders`,{
           method : "POST",
           headers : {
               'Content-Type':'application/json',
           },
           body:JSON.stringify(form)
       })
    }

    // Get data of only this user. store it in redux
    // GET /orders?owner_name=john will give you all order of user john
    //  on submit click create a new order, new order has status `Not Accepted`
    return (
      <div>
        <div className="form">
          <input
            className="new-problem"
            type="text"
            name="problem"
            placeholder="Enter problem"
            onChange={handleChange}
          />
          {/* This input is readonly, it's coming from redux */}
          <input
            className="owner-name"
            type="text"
            name="owner_name"
            placeholder="yourname"
            readOnly
            onChange={handleChange}
          />
          <input
            className="brand"
            type="text"
            name="brand"
            placeholder="Enter brand name"
            onChange={handleChange}
          />
          {/* Create new problem, show it in below form immediately */}
          <button className="submit"onClick={handleSubmit} >submit</button>
        </div>
  
        <div className="pastOrders">
          {/* this button filters the data below. */}
          {/* it's just a toggle of redux state something like `showUnfinished`  */}
          <button className="filter">
            {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
          </button>
  
          {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
         
       

       

           
       <div className="past-orders">
            <span className="id"></span>. <span className="problem"></span>{" "}
            <span className="cost">
              {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
            </span>
            <p className="status">Status:</p>
            <hr />
          </div>
            
        </div>
      </div>
    );
  };