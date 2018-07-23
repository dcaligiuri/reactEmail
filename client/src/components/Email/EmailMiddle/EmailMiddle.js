
import React, { Component } from 'react';
import classes from './EmailMiddle.css';


class EmailMiddle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      read: this.props.read
    };
  }

  render() {
    
    let stylingSubject = [classes.Line];
    let stylingSender = [];
    if(this.props.read === false){
      stylingSubject = [classes.Line, classes.Bold].join(' ');
      stylingSender = [classes.Bold].join(' ');
    }

    return (
      <div className={classes.Ellipsis}>
        <p className={stylingSender}>{this.props.sender}</p>
        <p className={stylingSubject}>{this.props.subject}</p>
        <p className={classes.Line}>{this.props.body}</p>
      </div>

    );
  }
}

export default EmailMiddle;





