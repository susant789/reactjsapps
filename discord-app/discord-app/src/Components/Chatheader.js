import React from 'react';
import "./Chatheader.css";
import NotificationIcon from '@material-ui/icons/NotificationsRounded';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';



function Chatheader({ channelname }) {
    console.log(channelname)
    return (
        <div className="Chatheader"> 
            <div className="Chatheader__left">
                <h3><span className="Chatheader__hash">#</span>{ channelname}</h3>
            </div>
            <div className="Chatheader__right">
                <NotificationIcon />
                <EditLocationRoundedIcon />
                <GroupRoundedIcon />
                <div className="Chatheader__search">
                    <input placeholder="Search"/>
                    <SearchRoundedIcon/>
                </div>
                <SendRoundedIcon/>
                <HelpRoundedIcon/>
            </div>
        </div>
    )
}

export default Chatheader
