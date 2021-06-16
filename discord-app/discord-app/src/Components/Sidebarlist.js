import React from 'react'
import { useDispatch } from 'react-redux'
import "./Sidebarlist.css"
import { setChannelInfo } from '../features/appSlice';

function Sidebarlist({id,channelname}) {

    const dispatch = useDispatch()
    console.log(channelname)
    return (
        <div 
        onClick={()=>dispatch(setChannelInfo({
            channelId:id,
            channelName:channelname,
            })
        )
    } 
        className="sidebar_channellist"
        >
            <h4><span className="channels__hash">#</span>{channelname}</h4>
        </div>
    )
}

export default Sidebarlist
