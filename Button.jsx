import {CommonContext} from "./Start"
function Button (){
    return(
          <CommonContext.Consumer>
            {
                ({updateColor})=>(
                    <button onClick={()=>updateColor()}>change color</button>
                )
            }
          </CommonContext.Consumer>

    )
}
export default Button;