import { Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => { 
    // Fetch data from the API
    fetch('http://localhost:3000/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); // The empty dependency array means this effect runs once, like componentDidMount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
 console.log(data)
  return (
    <div>
      <h1>API Data</h1>
      <Table variant='dark' striped>
        <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {data.map((item,i) => (
        <tr key={i}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
        </tr>
        ))}
        </tbody>
        </Table>
    </div>
  );
}

export default ApiData;
