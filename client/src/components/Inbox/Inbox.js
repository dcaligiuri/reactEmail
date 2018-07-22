import React, { Component } from 'react';
//import classes from './Inbox.css';
import Email from '../Email/Email';


class Inbox extends Component {


  render() {
    return (
      <div>
        <Email />
        <Email />
        <Email />
        <Email />
        <Email />
        <Email />
      </div>
    );
  }
}

export default Inbox;
