import React, {Component}from "react";
import {CommonContext} from "./Start"
class SubCom extends Component  {
    render(){
    return(
          <CommonContext.Consumer>
            {
              ({color})=>(
                <h style={{backgroundColor:color}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quisquam consectetur enim aperiam corporis et velit repellendus, magni ut numquam aut quae perferendis veritatis quas, aliquam iusto labore perspiciatis? Laudantium.</h>
              )
            }
          </CommonContext.Consumer>
    )
    }
}
export default SubCom;