import React, { Component } from 'react';
import classes from './ReadEmail';
import SubjectStar from './SubjectStar/SubjectStar';
import ReadMiddle from './ReadMiddle/ReadMiddle';


class ReadEmail extends Component {

  state = {
    readEmail: null
  }

  componentDidMount() {

    fetch('/api/read/' + '5b5551eac1bade10a4ec9c83')
      .then(res => res.json())
      .then(readEmail => {
        console.log(readEmail);
        this.setState({readEmail: readEmail});
      })
  }

  render() {


    return (
      <div>
        {this.state.readEmail ? <SubjectStar subject={this.state.readEmail.subject} starred={this.state.readEmail.starred}/> : null}
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



