import logo from './logo.svg';
import './App.css';
import CallPro from './CallPro';

import PropC from './PropC';
function App(props) {
  return (
    <div  style={{backgroundColor:"red", color:"white"}}>
      <h1>function Component with props ! :)</h1>
      <center>
       <h1 >* hello coders *</h1>
         <h2>My name is : {props.name}</h2>
         <h2>My Email Id is : {props.email}</h2>
         <h2>Address : {props.add}</h2>
         </center>
    </div>
  );
}

export default App;
