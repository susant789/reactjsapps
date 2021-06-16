import React, { useEffect, useState } from 'react'
import "./Chat.css"
import Chatheader from './Chatheader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from "./Message";
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import { useSelector } from 'react-redux';
import db from '../Firebase';
import firebase from 'firebase';




function Chat() {
   const user = useSelector(selectUser)
   const channelId = useSelector(selectChannelId)
   const channelName = useSelector(selectChannelName)

   const [input, setinput] = useState("");
   const [messages, setmessages] = useState([]);
   
   useEffect(()=>{
       if(channelId){
        db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot=>{
             setmessages(snapshot.docs.map(doc=>doc.data()))
        });
       }
   },[channelId]);

   const sendmessage =(e)=>{
        e.preventDefault()
        db.collection("channels").doc(channelId)
        .collection("messages")
        .add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            user:user,
        })
        setinput("")
   }

    return (
        <div className="chat">
            <Chatheader
            channelname = { channelName }/>
            <div className="Chat__messages">
                {
                    messages.map(message=>{
                        return <Message 
                        message={message.message}
                        timestamp={message.timestamp}
                        user = {message.user}/>
                        
                    })
                }
            </div>
            <div className="Chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input 
                    value={input} 
                    disabled={!channelId}
                    onChange={(e)=>{
                        setinput(e.target.value)
                    }} 
                    placeholder={`message#${ channelName }`}/>
                    <button
                    onClick={sendmessage}
                    disabled={!channelId} 
                    className="Chat__button" type="submit">Send Message</button>
                </form>
                <div className="Chat__icons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
