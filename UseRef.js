
import React, { useRef } from 'react';
import ForwardRef from './ForwardRef';
function UseRef() {
  let inputUseRef=useRef(null)
  function inputHandle(){
    console.log(inputUseRef.current.value);
    inputUseRef.current.style.color='red'
    inputUseRef.current.style.backgroundColor='black'
    inputUseRef.current.focus()
  }
  return (
    <div>
      <center>
     <h1>UseRef in React</h1>
     <input type='text' ref={inputUseRef} />
     <ForwardRef ref={inputUseRef}/><br/>
      <button onClick={()=>inputHandle()}>handle</button>
      
      </center> 
    </div>
  )
}
export default UseRef;
