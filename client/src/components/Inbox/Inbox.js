import React, { Component } from 'react';
//import classes from './Inbox.css';
import Email from '../Email/Email';
import Spinner from '../UI/Spinner/Spinner';


class Inbox extends Component {

  state = {
    emails: null
  }


  translateStringToQuery(str){
      if (str === 'inbox'){
        return {};
      }
      else if (str === 'starred'){
        return {"starred": true};
      }
      else if (str === 'trash'){
        return {"trash": true};
      }
      else if (str === 'sent'){
        return {"sent": true};
      }
      else
        return null;
  }
      

  componentDidMount() {
    const query = this.translateStringToQuery(this.props.display);
    fetch('/api/inbox/' + JSON.stringify(query))
      .then(res => res.json())
      .then(emails => this.setState({emails}));
  }

  componentWillReceiveProps(nextProps){
    this.setState({loading: true});
    if (this.props.display !== nextProps.display){
      const query = this.translateStringToQuery(nextProps.display);
        fetch('/api/inbox/' + JSON.stringify(query))
          .then(res => res.json())
          .then(emails => {
            this.setState({emails: emails});
          });
    }
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
