import {React, useEffect, useState} from 'react'
import { Row, Form, Col, Button, InputGroup } from "react-bootstrap"
import axios from "axios"

function ChatPage({ user }) {
    const [users,setUsers] = useState([])
    const [allRooms, setAllRooms] = useState([])
    const [roomMessages, setRoomMessages] = useState([])
    const [roomId, setRoomId] = useState("")
    const [messageText, setMessageText] = useState("")

    useEffect(()=>{
        loadRooms()
        loadUsers()
    },[])


    async function loadRooms(){
        const res = await axios.get("/chat")
        
    }

    async function initiateChat(userIds){
        const postData = {userIds:[userIds]}
        const res = await axios.post("/chat/initiate", postData)
        setRoomId(res.data.chatRoom.chatRoomId)
    }

    async function getChatByRoom(){
        const res = await axios.get(`/chat/${roomId}`)
        console.log(res.data)
    }

    async function loadUsers(){
        const res = await axios.get("/user") 
        const tempPayload = res.data.users.filter(el => el._id !== user._id )
        setUsers(tempPayload)
    }
    
    async function handleClick(){
        const res = await axios.post(`/chat/${roomId}/message`, {messageText})
        console.log(res.data)
    }

    
    console.log(users)
    console.log("room ID is ", roomId)
    console.log("message text is ", messageText)
    return (
    <Row  > 
        <Col md={3}> 
            All Chats
            
            <ul>
            {
                users?.map((indivUser, index) =>(
                        <div key={index}>
                            <li>{indivUser.firstname}</li>
                            <Button onClick={()=>initiateChat(indivUser._id)} >Create New Chat</Button>
                        </div>                         
                ))

            }
            </ul>
        </Col>
        
        <Col className="chat-div" >
            <h4>{roomId&&roomId}</h4>
            <Form>
                <div className="chat-input">
                    <Form.Control 
                        className="m-2 chat-input-text" 
                        type="text" 
                        placeholder="Normal text"  
                        onChange={(e)=>{setMessageText(e.target.value)}} />
                    <Button className="m-2 chat-input-button" onClick={() => handleClick()} >Send</Button>
                </div>
               
                
            </Form>
        </Col>

    </Row>

    )
}

export default ChatPage
