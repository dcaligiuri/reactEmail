import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class BackBtn extends Component {

    render() {
        return (
            <div>
                <NavLink to='/'><FontAwesomeIcon style={this.props.style} icon={faChevronLeft}/></NavLink>
            </div>
        );
  }
}

export default BackBtn;
