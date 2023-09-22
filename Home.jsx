import { Link } from 'react-router-dom';
export default function Home(){
    return(
        <>
        <center>
        <h1>Home Page</h1>
        <div>hello friends this is home page</div>
        <p>welcome to react</p>
        <Link to='/About' >go to About Page</Link>
        </center>
        </>
    );
}