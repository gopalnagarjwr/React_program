import React, { useState } from "react";
import App from './App'
function Hoc (){
    return (
        <div>
            <center>
            <h1>higher order function </h1>
            <h2>{<Red />}</h2>
            <h2>{<Green />}</h2>
            </center>
        </div>
    );
}

function Red(){
     return <div style={{backgroundColor:'red',color:'black',width:'200px'}}> Count Red {<Counter />}</div>
}

function Green(){
    return <div style={{backgroundColor:'green',color:'black',width:'200px'}}>Green Count {<Counter />}</div>
}


 function Counter(){
    const [count,setCount]=useState(0);
    return <div>
          <h2 > {count}</h2>
          <button onClick={()=>setCount(count+1)} >update</button>
    </div>
}

export default Hoc;