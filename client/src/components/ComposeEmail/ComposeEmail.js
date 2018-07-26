
import React, { Component } from 'react';
import classes from './ComposeEmail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class ComposeEmail extends Component {


  handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const content = event.target.content.value;
    const subject = event.target.subject.value;
    
    fetch('/api/compose', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'subject': subject,
        'content': content,
        'email': email
      }
    });
  }

  render() {
    return (
      <div className={classes.ComposeBackground}>
      <form onSubmit={this.handleSubmit} className={classes.FormBackground}>
        <div style={{display: 'block', height: '5%'}}>
          <NavLink to='/'><FontAwesomeIcon style={{marginTop: '2%'}} icon={faChevronLeft}/></NavLink>
          <button><FontAwesomeIcon style={{float: 'right', marginTop: '2%'}} icon={faPaperPlane}/></button>
        </div>
          <input name="email" type="email" className={classes.Input} placeholder="To"/>
          <input name="subject" type="subject" className={classes.Input} placeholder="Subject" />
          <textarea name="content" type="content" className={classes.Input} style={{height: '85%'}} placeholder="Compose Email" />
        </form>
      </div>
    );
  }
}

export default ComposeEmail;




