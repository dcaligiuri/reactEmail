import React, { Component } from 'react';
//import classes from './App.css';
import Mailbox from './containers/Mailbox/Mailbox';
import SideDrawer from './components/UI/Navigation/SideDrawer/SideDrawer';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import ComposeEmail from './components/ComposeEmail/ComposeEmail';

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
        

      <BrowserRouter>
        <Switch>
          <Route path="/compose" component={ ComposeEmail } />
          <Route path="/" render={(props) => <Mailbox sideDrawerStatus={this.state.showSideDrawer} onChangeVersion={this.sideDrawerToggleHandler}/>}/>
        </Switch>
      </BrowserRouter>
     
      </div>
    );
  }
}

export default App;
