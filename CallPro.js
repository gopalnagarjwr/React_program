import React from 'react';
import PropC from './PropC';
export default class CallPro extends React.Component{
    constructor(){
        super();
        this.state={
            name:'ram'
        }           
    }
    render(){
      
        return(
            
            <div  style={{backgroundColor:"green", color:"white"}}>
                 <h1>Class Component with props ! :)</h1>
                
                 <PropC name={this.state.name} />
                 <button onClick={()=>this.setState({name:'vikas'})} 
                 >update</button>
                 
            </div>
        );
    }
} 