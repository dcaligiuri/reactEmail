
import React, { Component } from 'react';
import { classes } from './EmailRight.css';

class EmailRight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starred: this.props.starred
    };
  }

  starUnstar(argument){
    this.setState({starred: !argument});
  }
  
  render() {
    let star = null;
    if (this.state.starred === true){
      star = <span style={{color: 'yellow'}}>★</span>
    }
    else if (this.state.starred === false){
      star = <span>☆</span>
    }
        
    
    return (
      <div>
        <p>Jul 14</p>
        <p onClick={() => this.starUnstar(this.state.starred)}>{star}</p>
      </div>
    );
  }
}

export default EmailRight;




