
import { useState,useEffect } from "react";
// import { useDispatch } from "react-redux";
// import {sort} from '../Redux/Product/action'

export const Orders = () => {
    //  Get all data when admin logs in and populate it
    // store it in redux
   
    const [tableData , setTable] = useState([])
    const [sort,setSort]=useState([])

 



 useEffect(
     () => {
         fetch("http://localhost:8080/orders")
            .then((res) => res.json())
             .then((data) => {
                 setTable(data)
                 setSort(data)
             }
             
             )
             
     
     },[])

     useEffect(
         ()=>{
            console.log(tableData)
         },[tableData]
     )

     const handlesort =(e)=>{
        if(e.target.value=="id"){
            let item= tableData.sort((a,b)=>a.id-b.id)
            setSort([...item])
            
         }
         else if(e.target.value=="status"){
          let item= tableData.sort((a,b)=>
          a.status>b.status? 1 : a.status<b.status ?-1:0)
          setSort([...item])
          
         }
         else if(e.target.value=="cost"){
          let item= tableData.sort((a,b)=>a.cost-b.cost)
          setSort([...item])
          
         }
     }
  
    return (
      <div>
        <div>
          <div>
            <select className="controls" name="progress" id="progress"
              onChange={handlesort}>
              <option value="id">ID</option>
              <option value="status">Status</option>
              <option value="cost">Cost</option>
            </select>
          </div>
          <table className="orders">
            <thead>
              <tr>
                <th>ID</th>
                <th>Problem</th>
                <th>Client Name</th>
                <th>Status</th>
                <th>Cost</th>
                <th>Change Status</th>
                <th>Accept</th>
              </tr>
            </thead>
            <tbody>
                {sort.map((e)=>{
             return <tr className="orders-row">
                <td className="id">{e.id}</td>
                <td className="problem">{e.problem}</td>
                <td className="owner">{e.owner_name}</td>
                <td className="status">{e.status}</td>
                <td className="cost">{e.cost}</td>
                <td className="change-status">
                    {e.status==='Not Accepted' ? 
              
                  <select className="changeStatus" name="changeStatus"
                
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                    <option value="Not Accepted">Not Accepted</option>
                  </select> : null }
                </td>
                <td className="accept">
                  {/* Show this button only if status is Not Accepted */}
                  {/* on change make request to update it in db, and show changed status in table */}
                 
                 {e.status ==='Not Accepted' ? <button>Accept</button> : null}
                </td>
              </tr>
})}
            </tbody>
          </table>
        </div>
      </div>
    );
  };