
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class EmailRight extends Component {

  starUnstar(){

  }

  


  render() {
    return (
      <div>
        <p>Jul 14</p>
        <span onClick={this.starUnstar}>&#9734;</span>
      </div>
    );
  }
}

export default EmailRight;




