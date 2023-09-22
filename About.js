import { Link } from "react-router-dom";

 export default function About(){
    return (<>
    <center>
      <h1>About Page</h1>
      <div>hello friends this is About page</div>
        <p>welcome to react</p>
        <Link to='/'>go to Home Page</Link><br></br>
    </center> 
    </>);
 }