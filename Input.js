
import React, { useState } from 'react';

function Input(){
  const [data, setdata]=useState(null);
  const[print,setprint]=useState(false)
  function call(val){
     setprint(false)
      setdata(val.target.value);
  }
return(
  <div style={{ backgroundColor: "red", color: "white" }}>   
    <center>
      name :<input type='text' onChange={call} />
      {print?<div>{data}</div>:null}
      <button onClick={()=>setprint(true)}>print</button>
      </center >
  </div>
    )
}

export default Input;
