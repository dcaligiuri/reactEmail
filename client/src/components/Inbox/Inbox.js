import React, { Component } from 'react';
//import classes from './Inbox.css';
import Email from '../Email/Email';
import Spinner from '../UI/Spinner/Spinner';


class Inbox extends Component {

  state = {
    emails: null
  }


  translateStringToQuery(str){
    switch(str) {
      case str === 'inbox':
        return {};
        break;
      case str === 'starred':
        return {"starred": true};
        break;
      case str === 'trash':
        return {"trash": true};
        break;
      default:
        return null;
  }
  }

  componentDidMount() {
    const query = this.translateStringToQuery(this.props.display);
    fetch('/api/inbox/' + JSON.stringify(query))
      .then(res => res.json())
      .then(emails => this.setState({emails}));
  }


  render() {

    return (
      <div>
        {this.state.emails ? this.state.emails.map( 
          em => <Email key={em._id} sender={em.sender} 
                       subject={em.subject} 
                       body={em.body}
                       starred={em.starred}
                       dateSent={em.dateSent}
                       read={em.read}
                       proPic={em.profilePic}
                       id={em._id}/> )  : <Spinner /> } 
      </div>
    );
  }
}

export default Inbox;
