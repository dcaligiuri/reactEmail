
import React, { Component } from 'react';
import classes from './EmailMiddle.css';


class EmailMiddle extends Component {


  render() {
    return (
      <div>
            <p>{this.props.sender}</p>
            <p>{this.props.subject}</p>
            <p>{this.props.body}</p>
      </div>

    );
  }
}

export default EmailMiddle;





