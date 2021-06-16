import React from 'react';
import "./Message.css"
import { Avatar } from '@material-ui/core';

function Message({timestamp,user,message}) {
    console.log(timestamp)
    return (
        <div className="message">
            <Avatar src={user.photo}/>
            <div className="Message__info">
                <h4>{user.name}<span className="TimeStamp">
                    {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
