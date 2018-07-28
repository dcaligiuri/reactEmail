import React, { Component} from 'react';
import Mailbox from './containers/Mailbox/Mailbox';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ComposeEmail from './components/ComposeEmail/ComposeEmail';
import ReadEmail from './components/ReadEmail/ReadEmail';


class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/compose" component={ ComposeEmail } />
            <Route path="/:emailId" component={ ReadEmail } />
            <Route path="/" render={(props) => <Mailbox />}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
