import { Table } from 'react-bootstrap';
function Data(props) {
  return (
    <div>
      <span> {props.data.name} </span>
      <span>{props.data.email}</span>
      <span>{props.data.contact}</span><br />
    </div>
  )
}

export default Data;