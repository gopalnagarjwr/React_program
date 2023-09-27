import { Table } from 'react-bootstrap';
import { useEffect, useState } from "react";

function ApiDelete(){
   const[data,setdata]=useState([]);
    useEffect(()=>{
        apiCall();
    },[]);
    
    function apiCall(){
      fetch(`http://localhost:3000/posts`).then((respons)=>{
          respons.json().then((res)=>{
              setdata(res);
          })
        })
    }
  
function funcall(id){
  fetch(`http://localhost:3000/posts/${id}`,{
    method:'DELETE'
  }).then((respons)=>{
    respons.json().then(data=>{
        apiCall()
    })
  })
}

    return(
        <div>
        <h1>API Data</h1>
        <Table variant='' striped>
          <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Opretions</th>
          </tr>
          {data.map((item,i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.userName}</td>
            <td>{item.userEmail}</td>
            <td><button onClick={()=>funcall(item.id)}>delete</button></td>
          </tr>
          ))}
          </tbody>
          </Table>
      </div>
    );

}
 export default ApiDelete;