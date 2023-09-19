import {Table} from 'react-bootstrap';
function List() {
  const arr=[
          {name:'Ram' ,email:'gopalnagarjwr@gmail.com' ,contact:8696742758},
          {name:'vikas' ,email:'vikasjaintk@gmail.com' ,contact:855542758},
          {name:'raj' ,email:'raj123tk@gmail.com' ,contact:9983642758},
          {name:'ghanshaym' ,email:'gan431tk@gmail.com' ,contact:9886932758}
          ];
    
  return (
    <div>.
      <center>
      <h1>List of users </h1>
      <Table striped variant='dark'>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>contact</th>
        </tr>
       {
        arr.map((item,i)=>
        <tr key={i}>
          <td>{item.name}</td>
          <td> { item.email } </td>
          <td>{ item.contact}</td> 
          </tr>
        )
       }
       </tbody>
       </Table>
       </center>
    </div>
  );
}

export default List;