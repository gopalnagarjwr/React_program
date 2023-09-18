
import React, { useState } from 'react';
function Validation(){
   
  const[name,setname]=useState('')
  const[pass,setpass]=useState('')
  const[CheName,setCheN]=useState(false)
  const[Chepass,setCheP]=useState(false)
    function al(){
         name.length<3?pass.length<5?alert("fields are not correct ?"):alert("fields not are correct ?"):alert("All Good :)");
    }
  function inpu(val){
    let name=val.target.value.length;
    setname(name);
     name>3?setCheN(false):setCheN(true);

  }
  function pas(val){
    let pass=val.target.value.length
    setpass(pass);
     pass>5?setCheP(false):setCheP(true)
  }

return(
  <div style={{ backgroundColor: "red", color: "white",padding:'50px' }}>
    <center>  
      <h1>* Login Page *</h1>
      <form onSubmit={al} style={{ backgroundColor: "skyblue", color: "black", width:'500px',padding:'50px', }}>
      Name : <input type='text' onChange={inpu}/>{CheName?<div>char length not valied</div>:""}<br/>
      Password :<input type='password' onChange={pas}/>{Chepass?<div>password length not valied</div>:""}<br/><br/>
      <button type='submit'>submit</button>
      </form>
      </center> 
  </div>
    )
}

export default Validation;
