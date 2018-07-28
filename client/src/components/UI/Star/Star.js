
import React, { Component } from 'react';
import classes from './Star.css';

class Star extends Component {

    constructor(props) {
        super(props);
        this.state = {
          starred: this.props.starred,
        };
    }

    starUnstar(starStatus, emailId){

        this.setState({starred: !starStatus});
        
        fetch('/api/star/' + emailId, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'starred': !starStatus
          },
          body: {
            'starred': !starStatus
          }
    
        })
    
      }
  
  
  render() {
    let star = null;
    if (this.state.starred === true){
      star = <p 
                className={classes.Star}
                onClick={() => this.starUnstar(this.state.starred, this.props.emailId)} 
                style={{color: 'yellow'}}>★</p>
    }
    else if (this.state.starred === false){
      star = <p
                className={classes.Star}
                onClick={() => this.starUnstar(this.state.starred, this.props.emailId)}>☆</p>
    }
    
    return (
      <div style={{textAlign: 'right'}}>
          {star}
      </div>
    );
  }
}

export default Star;




