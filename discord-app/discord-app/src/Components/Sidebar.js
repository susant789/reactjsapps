import React from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import Sidebarlist from "./Sidebarlist"
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                    <h1>Starter programmer</h1>
                    <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addchannel"/>
                </div>
                <div className="sidebar__channellist">
                    <Sidebarlist />
                    <Sidebarlist />
                    <Sidebarlist />
                    <Sidebarlist />
                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon 
                className="signalIcon"
                fontSize="Large"/>
                <div className="sidebar__voiceinfo">
                    <h3>voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoIcon className="icons" />
                    <CallIcon className="icons"/>
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar />
                <div className="sidebar__profileInfo">
                    <h3>@susant</h3>
                    <p>#thisIsMyid</p>
                </div>
                <div className="sidebar_profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
