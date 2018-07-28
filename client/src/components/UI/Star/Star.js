
import React, { Component } from 'react';

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
      star = <span style={{color: 'yellow'}}>★</span>
    }
    else if (this.state.starred === false){
      star = <span>☆</span>
    }
    
    return (
      <div style={{textAlign: 'right'}}>
        <p onClick={() => this.starUnstar(this.state.starred, this.props.emailId)}>{star}</p>
      </div>
    );
  }
}

export default Star;




