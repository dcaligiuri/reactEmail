import React, { Component } from 'react';
import InboxHeader from '../../components/InboxHeader/InboxHeader';
import Inbox from '../../components/Inbox/Inbox';


class Mailbox extends Component {

  sideDrawerToggleHandler = (status) => {
      this.props.onChangeVersion(status); 
  }


  render() {
    return (
      <div>
          <InboxHeader sideDrawerStatus={this.props.sideDrawerStatus} onChangeVersion={this.sideDrawerToggleHandler} /> 
          <Inbox />
      </div>
    );
  }
}

export default Mailbox;
