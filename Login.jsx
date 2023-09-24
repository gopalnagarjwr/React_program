import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const log = () => {
        localStorage.setItem('login', true);
        naviget('/');
    }
    const naviget = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (login) {
            naviget('/');
        }
    })

    return (
        <>
            <br />
            <br />
            <h1>* Login Page *</h1><br />
            Email : <input type="text" placeholder="email address" /><br /><br />
            Password : <input type="number" placeholder="enter password" /><br /><br /> 
            <button onClick={log}>Submit</button>
        </>
    )
}
export default Login;