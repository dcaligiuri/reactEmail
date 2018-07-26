import React, { Component } from 'react';
import InboxHeader from '../../components/InboxHeader/InboxHeader';
import Inbox from '../../components/Inbox/Inbox';
import ComposeBtn from '../../components/UI/Navigation/ComposeBtn/ComposeBtn';
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer';

class Mailbox extends Component {
  
  
  state = {
    showSideDrawer: false,
    display: 'Inbox'
  } 

  sideDrawerToggleHandler = (status) => {
    this.setState({showSideDrawer: !status});
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
        return { showSideDrawer: !prevState.showSideDrawer};
    });
  }

  changeDisplay = (displayStatus) => {
    this.setState({display: displayStatus});
    this.setState({showSideDrawer: !this.state.showSideDrawer});
  }

  render() {
    return (
      <div>
          <SideDrawer 
            closed={this.sideDrawerClosedHandler}
            open={this.state.showSideDrawer}
            onChangeDisplay={this.changeDisplay}
            display={this.state.display}/>
          <InboxHeader
            sideDrawerStatus={this.state.sideDrawerStatus} 
            header={this.state.display}
            onChangeVersion={this.sideDrawerToggleHandler} /> 
          <Inbox 
            display={this.state.display} />
          <ComposeBtn />
      </div>
    );
  }
}

export default Mailbox;
