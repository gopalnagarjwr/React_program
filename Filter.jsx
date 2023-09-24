import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Filter(){
    const [searchParams,setSearchParams]=useSearchParams();
    const[city,setcity]=useState();
    function call(){    
    setcity(searchParams.get('city'))
    }
    return (
        <>
        <h1>Filter page</h1>
        <h3>city : {city}</h3>
       city: <input type="text" onChange={(e)=>setSearchParams({city:e.target.value})}/>
      <button onClick={()=>call()}>click</button>
        </>
    );
}