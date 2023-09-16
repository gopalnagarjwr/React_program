
import React  from 'react';
  class User extends React.Component{
     
        constructor(){
           super();
           this.p={
              data:0
           }
        }
     change(){
          this.setState({data:this.p.data+=1});
     }
  
    render(){
      return(
        <div className='User'>
         <center>
         <h1 >Update data by state in class component  </h1>
        <h2>data : {this.p.data}</h2>
        <button onClick={()=>this.change()}>change</button>
        </center>
        </div>
      );
    }
 }
 export default User;

 