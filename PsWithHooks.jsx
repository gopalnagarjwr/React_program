import { useEffect,useRef } from "react";
function PsWithHooks(props){
       const lastVal=useRef();
       useEffect(()=>{
        lastVal.current=props.count;
       })
     const PriviesProps=lastVal.current;
    return (
        <>
        <h1>Counter {props.count}</h1>
        <h1>Priveos Counter {PriviesProps}</h1>
        </>
    );
}
export default PsWithHooks;