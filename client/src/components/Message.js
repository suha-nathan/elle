import React from 'react'

function Message({ id, senderName, text }) {
    return (
        <div className= "message-item">
            <div><b>{senderName}</b></div>
            <span>{text}</span>            
        </div>
    )
}

export default Message
