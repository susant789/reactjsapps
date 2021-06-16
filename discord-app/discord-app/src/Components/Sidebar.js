import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
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
import { selectUser } from '../features/userSlice';
import { useSelector } from "react-redux"
import db,{ auth } from '../Firebase';

function Sidebar() {

    const user = useSelector(selectUser)
    const [channels,setchannels] = useState([])
    
    useEffect(()=>{
        db.collection("channels").onSnapshot(snapshot =>{
            setchannels(snapshot.docs.map(doc=>({
                id:doc.id,
                channel:doc.data(),
            }))
            )
        });
    },[]);

    const handlechannel =()=>{
        const channelname = prompt("Enter your channel name");
        if(channelname){
            db.collection("channels").add({
                channelname : channelname,
            });
        }
    };

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
                    <AddIcon onClick={handlechannel} className="sidebar__addchannel"/>
                </div>
                <div className="sidebar__channellist">
                    {
                        channels.map(({ id,channel })=>{
                            return <Sidebarlist key={id} id={id} channelname ={channel.channelname}/>
                        })
                    }
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
                <Avatar onClick={()=>{auth.signOut()}} src={user.photo} />
                <div className="sidebar__profileInfo">
                    <h3>{user.name}</h3>
                    <p>#{user.uid.substring(0,5)}</p>
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
