
import React  from 'react';
  class PropC extends React.Component{ 
     render()
     {
      return (
         <div>
            <center>
            <h1>* hello coders *</h1>
            <h2>My Name is {this.props.name} </h2>
            
            </center>
         </div>
      );
     }

 }
 export default PropC;

 