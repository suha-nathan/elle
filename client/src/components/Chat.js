import { React, useState, useEffect } from 'react'
import socketClient from 'socket.io-client'
import ChannelList from './ChannelList'
import MessagesPanel from './MessagesPanel'
import axios from "axios"

function Chat() {
    const SERVER = "http://127.0.0.1:8080";

    const [channels, setChannels] = useState(null)
    const [socket, setSocket] = useState(null)
    const [channel, setChannel] = useState(null)

    useEffect(() =>{
        loadChannels()
        configureSocket()
    },[])

    function configureSocket() {
        let socket = socketClient(SERVER)
        socket.on('connection', () => {
            if (channel){
                handleChannelSelect(channel.id)
            }
        })
        socket.on('channel', channel => {
            channels.forEach(c => {
                if (c.id == channel.id){
                    c.participants = channel.participants
                }
            })
            // setChannels() CHANGE THIS TO
        })
        socket.on('message', message => {
            channels.forEach(c => {
                if(c.id === message.channelId){
                    if(!c.messages){
                        c.messages = [message]
                    }else{
                        c.messages.push(message)
                    }
                }
            })
            // setChannels()
        })
    }

    async function loadChannels(){
        axios.get('/getChannels').then(response =>{
            console.log(response)
            setChannels(response.channels)
        })
    }

    function handleChannelSelect(id){
        let tempChannel = channels.find(c => c.id === id)
        setChannel(tempChannel)
        socket.emit('channel-join', id, ack => {})
    }

    function handleSendMessage(channelId, text){
        socket.emit('send-message', { channelId, text, senderName: socket.id, id: Date.now() })
    }

    return (
        <div className= "chat-app">
            <ChannelList channels={channels} onSelectChannel={handleChannelSelect} />
            <MessagesPanel onSendMessage={handleSendMessage} channel={channel}/>            
        </div>
    )
}

export default Chat
