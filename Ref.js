import React, { createRef } from 'react';
class Ref extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  componentDidMount() {
    // console.log(this.inputRef);
  }
  getVal(){
      console.log(this.inputRef.current.value);
      this.inputRef.current.style.color='red'
      this.inputRef.current.style.backgroundColor='black'
      this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <center>
          <h1>Ref in React</h1>
            <input type='text' ref={this.inputRef} />
            <button onClick={()=>this.getVal()}>handle</button>
        </center>
      </div>
    )
  }
}

export default Ref;