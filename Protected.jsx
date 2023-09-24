import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(Props) {
    const {Component}=Props;
    const naviget=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(!login){
             naviget('/Login');
        }
    })
    return (
            <>
            <Component />
            </>
    )
}
export default Protected;