import React, {PureComponent} from "react";
class PureClass extends React.PureComponent {
  constructor(){
    super();
    this.state={
      data:0
    }
  }
     render(){
      console.warn("rerendring")
  return(
    <>  
    <center>
       <h1>pure class component</h1>
       <h2>updated value {this.state.data}</h2>
       <button onClick={()=>this.setState({data:1})} >update</button>
       </center>
    </>
  )
     }
}
export default PureClass;