
import React, { useState } from 'react';
function Form(){

  const [inp,setInp]=useState(null)
  const [sel,setSel]=useState(null)
  const [Check,setCheck]=useState(null)
  const [bool,setbool]=useState(false)
return(
  <div style={{ backgroundColor: "red", color: "white" }}>   
    <center>
     <h1>* Form Page *</h1><br/> <br/>
     <form onSubmit={(e)=>e.preventDefault()} style={{ backgroundColor: "green", color: "white" ,width:'500px',padding:'50px'}} >
     Name :<input type='text' placeholder='enter name'  onChange={(e)=>{setInp(e.target.value); setbool(false);}}/><br/> <br/>
       select option :<select onChange={(e)=>setSel(e.target.value)}>
       <option></option>
        <option>Bsc</option>
        <option>B.A</option>
        <option>B.tech</option>
       </select><br/> <br/>
       <input type='checkbox' onChange={(e)=>setCheck(e.target.checked)}/> <span>  check term and conditions</span><br/> <br/>
       <button type='submit' onClick={()=>setbool(true)}>submit</button>
       <button type="reset">Clear</button>
       </form>
      {bool?<div>{inp +" "+ sel + " " +Check}</div>:null}
      </center >
  </div>
    )
}

export default Form;
