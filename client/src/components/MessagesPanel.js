import {React, useEffect, useState} from 'react'
import Message from "./Message"

function MessagesPanel({ onSendMessage, channel }) {
    const [inputValue, setInputValue] = useState("")

    function send(){
        if(inputValue && inputValue != ""){
            onSendMessage(channel.id, inputValue)
            setInputValue('')
        }
    }

    function handleInput(e){
        setInputValue(e.target.value)
    }

    return (
        <div className="messages-panel">
            <div className="messages-list">
                {channel && channel.messages ?
                    channel.messages.map((message,index) => (
                        <Message 
                            key={index}
                            id={message.id}
                            senderName={message.senderName}
                            text={message.text}/>
                    ))
                :
                    <div className="no-content-message"> There are no messages to show </div>
                }
            </div>
            {channel&&
                <div className="messages-input">
                    <input type="text" onChange={(e)=>handleInput(e)} value={inputValue}/>
                    <button onClick={() =>send()}>Send</button>
                </div>
            }            
        </div>
    )
}

export default MessagesPanel
