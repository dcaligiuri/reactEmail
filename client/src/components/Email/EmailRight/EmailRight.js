
import React, { Component } from 'react';

class EmailRight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starred: this.props.starred,
      read: this.props.read
    };
  }

  starUnstar(starStatus, emailId){
    console.log(emailId);
    this.setState({starred: !starStatus});
  }
  
  render() {
    let star = null;
    let dateStyling = {};
    if (this.state.starred === true){
      star = <span style={{color: 'yellow'}}>★</span>
    }
    else if (this.state.starred === false){
      star = <span>☆</span>
    }

    if (this.state.read === false){
      dateStyling = {color: 'blue'}
    }

        
    
    return (
      <div style={{textAlign: 'right'}}>
        <p style={dateStyling}>{this.props.dateSent}</p>
        <p onClick={() => this.starUnstar(this.state.starred, this.props.id)}>{star}</p>
      </div>
    );
  }
}

export default EmailRight;




