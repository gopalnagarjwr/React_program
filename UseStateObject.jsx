import { useState } from "react";

function UseStateObject(){
    const[ob,setob]=useState({name:'ram',age:20});
    return(
        <center>
            <h1>Name : {ob.name}</h1>
            <h1>age : {ob.age}</h1>
            <input type="text" value={ob.name} 
            onChange={(e)=>setob({...ob,name:e.target.value})} /><br />
            <input type="text" value={ob.age}
             onChange={(e)=>setob({...ob,age:e.target.value})} /><br />          
  
        </center>
    )
}

export default UseStateObject;