import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';


class SendEmailBtn extends Component {


    render() {
        return (
            <div>
                <button style={{float: 'right', outline: 'none'}}><FontAwesomeIcon icon={faPaperPlane}/></button>
            </div>
        );
  }
}

export default SendEmailBtn;