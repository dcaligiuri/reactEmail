import React, { Component } from 'react';
//import classes from './App.css';
import Mailbox from './containers/Mailbox/Mailbox';
import SideDrawer from './components/UI/Navigation/SideDrawer/SideDrawer';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import ComposeEmail from './components/ComposeEmail/ComposeEmail';
import ReadEmail from './components/ReadEmail/ReadEmail';

class App extends Component {
  state = {
    showSideDrawer: false,
    display: 'inbox'
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
            display={this.state.display}/>
        </header>
        

      <BrowserRouter>
        <Switch>
          <Route path="/compose" component={ ComposeEmail } />
          <Route path="/:emailId" component={ ReadEmail } />
          <Route path="/" render={(props) => <Mailbox sideDrawerStatus={this.state.showSideDrawer} display={this.state.display} onChangeVersion={this.sideDrawerToggleHandler}/>}/>
        </Switch>
      </BrowserRouter>
     
      </div>
    );
  }
}

export default App;
