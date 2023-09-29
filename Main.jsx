import React, {Component}from "react";
import {CommonContext} from './Start'
import SubCom from "./SubCom";
import  Button  from "./Button";
class Main extends Component{
     
     constructor(){
        super();
        this.updateColor=()=>{
            this.setState({color:'red'})
        }
        this.state={
            color:'green',
        updateColor:this.updateColor
        }
       
     }
     render(){
        return(
            <CommonContext.Provider value={this.state}>
                <h1 style={{backgroundColor:this.state.color}}>this is comman Context</h1>
                <SubCom />
                <Button />
            </CommonContext.Provider>
        )
     }

}
export default Main;