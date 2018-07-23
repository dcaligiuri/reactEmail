
import React, { Component } from 'react';
import classes from './EmailLeft.css';

class EmailLeft extends Component {


  render() {
    return (
      <div>
        {this.props.proPic ? <img className={classes.ProPic} src={this.props.proPic}/> : null}
      </div>
    );
  }
}

export default EmailLeft;






