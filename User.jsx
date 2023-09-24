import { useParams } from "react-router-dom";
function User(){
     const Params= useParams();
     const {name}=Params;
    return(
        <>
            <br></br>
           <h1 >this is a {name} Page </h1>

        </>
    )
}
export default User;