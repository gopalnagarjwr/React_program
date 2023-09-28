import { useState } from "react";
function PreviesState(){
    const[data, setdata]=useState(1);
    function counter(){
    // first way :-
           let random=Math.floor(Math.random()*10)
              setdata((pre)=>{
                if(random>pre){
                alert("big")
                }
                return random
              }
              );

      //  secound way :-

              // for(let i=1; i<=5; i++){
              //   console.log("hello")
              //   setdata(data+1)
              // }
    }
    return (
        <center>
          <h2>new random {data}</h2><br /><br />
          <button onClick={()=>counter()}>Pre-Counter</button>
        </center>
    )
}
export default PreviesState;