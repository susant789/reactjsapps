import React from 'react';
import "./Message.css"
import { Avatar } from '@material-ui/core';

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="Message__info">
                <h4>Susant<span className="TimeStamp">My time Stamp</span></h4>
                <p>My message</p>
            </div>
        </div>
    )
}

export default Message
