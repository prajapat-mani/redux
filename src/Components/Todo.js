import React, { useState } from "react";
import { addtodo,deletetodo,removetodo } from "../Action";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css"
const Todo=()=>{
    
var a=false;
console.log(a,"aaaa");
    const [inputdata,setInputdata]=useState()
    
    const dispatch=useDispatch();

    const list=useSelector((state)=>state.Todoreducers)
    console.log(list,'kkkkkk');

    const hiii=()=>{
        // && alert("deleted")
    }
    
     return(
        <>

        <button onClick={hiii}  >con</button>
<input type="text" placeholder="add items"
    value={inputdata}
    onChange={(event)=>setInputdata(event.target.value)}
/>
<button onClick={()=>  dispatch(addtodo(inputdata,a),setInputdata(''))}>add item</button>


<hr/>

{
    list?.map((val,ind)=>{

        return <ol>

            <li>
            <h1 className={val?.a===true?"red":"black"}>{val?.data }</h1>
           <button onClick={()=>window.confirm() || dispatch(deletetodo(ind))}>x</button>
            <button onClick={()=> dispatch(removetodo(ind))}>changes</button>
            </li>
        </ol>
       
    })
}

        </>
    )
}
export default Todo;