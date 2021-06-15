import React from 'react'
import "./Chat.css"
import Chatheader from './Chatheader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from "./Message"


function Chat() {
    return (
        <div className="chat">
            <Chatheader />
            <div className="Chat__messages">
                <Message />
                <Message />
                <Message />
            </div>
            <div className="Chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input placeholder="Message #TESTCHANNEL"/>
                    <button className="Chat__button" type="submit">Send Message</button>
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
