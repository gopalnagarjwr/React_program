import { useState } from "react";
  export function First() {
    const [data, setdata]= useState(0)
      function call(){
        setdata(data+2)
       
      
    }
    console.warn("__________")
    return (
      <div className="First">
        <center>
        <h1 >Update data by state in function component  </h1>
        <h2>data : {data}</h2>
         <button onClick={call}>click me</button>
         </center>
      </div>
    );
  }
  export default First ;  