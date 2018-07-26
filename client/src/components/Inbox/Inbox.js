import React, { Component } from 'react';
//import classes from './Inbox.css';
import Email from '../Email/Email';
import Spinner from '../UI/Spinner/Spinner';


class Inbox extends Component {

  state = {
    emails: null,
    loading: false
  }


  translateStringToQuery(str){
      if (str === 'Inbox'){
        return {"trash": false};
      }
      else if (str === 'Starred'){
        return {"starred": true};
      }
      else if (str === 'Trash'){
        return {"trash": true};
      }
      else if (str === 'Sent'){
        return {"sent": true};
      }
      else
        return null;
  }
      

  componentDidMount() {
    const query = this.translateStringToQuery(this.props.display);
    fetch('/api/inbox/' + JSON.stringify(query))
      .then(res => res.json())
      .then(emails => {
        this.setState({emails: emails});
      })
  }

  componentWillReceiveProps(nextProps){
    if (this.props.display !== nextProps.display){
      this.setState({loading: true});
      const query = this.translateStringToQuery(nextProps.display);
        fetch('/api/inbox/' + JSON.stringify(query))
          .then(res => res.json())
          .then(emails => {
            this.setState({emails: emails});
            this.setState({loading: false});
          });
    }
  }


  render() {

    return (
      <div>
        {(this.state.emails && this.state.loading === false) ? this.state.emails.map( 
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
