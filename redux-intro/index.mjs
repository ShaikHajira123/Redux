
import   {AddTodo, DeleteTodo}  from "./action.js";
import {store} from "./store.js"




document.getElementById("submit").addEventListener("click", () => {
  document.getElementById("showTodos").innerHTML = null;

   let todo = document.getElementById("todo").value;
   store.dispatch(AddTodo(todo, false));

   let data = store.getState().todos;
   console.log(data);

  appendData(data);
});


let showTodos = document.getElementById("showTodos");
function appendData (data){
    data.map((e)=>{
       

        let btn = document.createElement('button')
        btn.innerText="Delete"
        btn.addEventListener('click',()=>{
            
            store.dispatch(DeleteTodo(e.title,true))
            document.getElementById('showTodos').innerHTML=null

            let remainData = store.getState().todos
            appendData (remainData)
        })
        let p=document.createElement('div')
        p.innerHTML=e.title
        showTodos.append(p , btn)
    })
}