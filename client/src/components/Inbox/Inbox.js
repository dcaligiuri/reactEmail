import React, { Component } from 'react';
//import classes from './Inbox.css';
import Email from '../Email/Email';


class Inbox extends Component {

  state = {
    emails: null
  }

  componentDidMount() {
    fetch('/api/inbox')
      .then(res => res.json())
      .then(emails => this.setState({emails}, () => console.log('Emails fetched...', emails)));
  }


  render() {
    return (
      <div>
        {this.state.emails ? this.state.emails.map( 
          em => <Email key={em.id} sender={em.sender} 
                       subject={em.subject} 
                       body={em.body}
                       starred={em.starred}/> )  : null } 
      </div>
    );
  }
}

export default Inbox;
