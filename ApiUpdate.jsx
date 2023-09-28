import { Table } from 'react-bootstrap';
import { useEffect, useState } from "react";

function ApiUpdate() {
  const [data, setdata] = useState([]);
  const [id, setId] = useState();
  const [userName, setname] = useState('');
  const [userEmail, setemail] = useState('');

  useEffect(() => {
    apiCall();
  }, []);

  function apiCall() {
    fetch(`http://localhost:3000/posts`).then((respons) => {
      respons.json().then((res) => {
        setdata(res);
        setId(res[0].id);
        setname(res[0].userName);
        setemail(res[0].userEmail);
      })
    })
  }

  function funcall(id) {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    }).then((respons) => {
      respons.json().then(data => {
        apiCall()
      })
    })
  }

  function update(i) {
    setId(data[i].id);
    setname(data[i].userName);
    setemail(data[i].userEmail);
  }
  function userupdate() {
    let ob = {id, userName, userEmail }
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'Put',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(ob)
    }).then((respons) => {
      respons.json().then(data => {
        apiCall()
      })
    })
  }


  return (
    <div>
      <h1>API Data</h1>
      <Table variant='' striped>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Opretions</th>
            <th>
            </th>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.userEmail}</td>
              <td><button onClick={() => funcall(item.id)}>delete</button>
                <button onClick={() => update(i)} >update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table><br /><br /><br />
      <center>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} /><br /><br />
        <input type='text' value={userName} onChange={(e) => setname(e.target.value)} /><br /><br />
        <input type='text' value={userEmail} onChange={(e) => setemail(e.target.value)} /><br /><br />
        <button onClick={() => userupdate()}>update</button>
      </center>
    </div>
  );

}
export default ApiUpdate;