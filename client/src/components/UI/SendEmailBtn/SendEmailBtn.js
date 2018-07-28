import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';


class SendEmailBtn extends Component {

    backToInbox(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <button 
                    onClick={() => this.backToInbox()}
                    style={{float: 'right', outline: 'none'}}>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </button>
            </div>
        );
  }
}

export default withRouter(SendEmailBtn);