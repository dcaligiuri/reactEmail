
import React, { Component } from 'react';
import classes from './EmailRight.css';
import Star from '../../UI/Star/Star';

class EmailRight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      read: this.props.read
    };
  }

  render() {
    let dateStyling = {};

    if (this.state.read === false){
      dateStyling = {color: 'blue'}
    }

        
    return (
      <div style={{textAlign: 'right'}}>
        <p className={classes.EmailDate} style={dateStyling}>{this.props.dateSent}</p>
        <Star starred={this.props.starred} emailId={this.props.id}/>
      </div>
    );
  }
}

export default EmailRight;




