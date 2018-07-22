import React, { Component } from 'react';
import InboxHeader from '../../components/InboxHeader/InboxHeader';
import Inbox from '../../components/Inbox/Inbox';

//import classes from './Mailbox.css';

class Mailbox extends Component {

  render() {
    return (
      <div>
          <InboxHeader /> 
          <Inbox />
      </div>
    );
  }
}

export default Mailbox;
