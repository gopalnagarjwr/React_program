import React, {forwardRef} from "react";

function ForwardRef(props,ref) { 
  return(
    <>  
    <center>
       <h1>ForwardRef</h1>
        <input type="text" ref={ref} />
       </center>
    </>
  )
   }

export default  forwardRef(ForwardRef);