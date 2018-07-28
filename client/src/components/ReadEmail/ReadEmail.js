import React, { Component } from 'react';
//import classes from './ReadEmail';
import ReadSubjectStar from './ReadSubjectStar/ReadSubjectStar';
import ReadMiddle from './ReadMiddle/ReadMiddle';
import ReadHeader from '../ReadEmail/ReadHeader/ReadHeader';


class ReadEmail extends Component {

  state = {
    readEmail: null
  }

  componentDidMount() {
    fetch('/api/read/' + this.props.match.params.emailId)
      .then(res => res.json())
      .then(readEmail => {
        this.setState({readEmail: readEmail});
      })
  }

  render() {


    return (
      <div>
        {this.state.readEmail ? <ReadHeader emailId={this.state.readEmail._id}/> : null }
        {this.state.readEmail ? <ReadSubjectStar subject={this.state.readEmail.subject} starred={this.state.readEmail.starred}/> : null}
        <hr />
        {this.state.readEmail ? <ReadMiddle 
                                  proPic={this.state.readEmail.profilePic} 
                                  sender={this.state.readEmail.sender}
                                  dateSent={this.state.readEmail.dateSent}
                                  altText={this.state.readEmail.sender} /> : null}
        {this.state.readEmail ? this.state.readEmail.body : null }
        <hr />
      </div>
    ); 
  }
}

export default ReadEmail;



