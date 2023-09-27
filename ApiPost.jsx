import { useState } from "react";
import ApiData from "./ApiData";


function ApiPost() {
    const [userName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    function Api() {
        let data = { userName, userEmail };
        fetch('http://localhost:3000/posts', {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((res) => {
                console.log(res)
                alert("data submited");
            })
        })
    }
    
    return (<center>
        <h1>Form Page</h1><br />
        Name : <input type="text" onChange={(e)=>setName(e.target.value)}/><br /><br />
        Email : <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br /><br />
        <button onClick={()=>Api()}>Submit</button>
        <ApiData />
    </center>);
}
export default ApiPost;
