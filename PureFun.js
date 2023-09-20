
import React, { useMemo, useState } from 'react';

function PureFun() {
  const [data,setdata]=useState(1)
  const [item, setitem]=useState(10)

  const multiCountMemo=useMemo(function multi(){
    console.warn('seee')
    return data*10
  },[data])
  return (
    <div>
      <center>
      <h1>PureComponent using useMemo Hook in React</h1>
      <h2>DataUpdate : {data}</h2>
      <h2>ItemUpdate : {item}</h2>
      <h3>{multiCountMemo}</h3>
       <button onClick={()=>setdata(data+2)}>dataUpdate</button><br/><br/>
       <button onClick={()=>setitem(item*2)}>itemUpdate</button>
      </center>
     
    </div>
  )
}
export default PureFun;
