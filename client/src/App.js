import React, { Component } from 'react';
//import classes from './App.css';
import Mailbox from './containers/Mailbox/Mailbox';
import Backdrop from '../src/components/UI/Backdrop/Backdrop';
import SideDrawer from '../src/components/UI/Navigation/SideDrawer/SideDrawer';

class App extends Component {
  state = {
    showSideDrawer: false
  } 


  sideDrawerToggleHandler = (openStatus) => {
    this.setState({showSideDrawer: openStatus});
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }
  


  render() {
    return (
      <div>
        <header>
        <SideDrawer 
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        </header>
        <Mailbox sideDrawerStatus={this.state.showSideDrawer} onChangeVersion={this.sideDrawerToggleHandler}/>
      </div>
    );
  }
}

export default App;
