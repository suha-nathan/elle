import React from 'react'
import { Row, Form, Col, Button, InputGroup } from "react-bootstrap"

function ChatPage() {
    return (

    <Row  > 
        <Col md={3}> 
            All Chats
        </Col>
        
        <Col className="chat-div" >

            <Form>
                <div className="chat-input">
                    <Form.Control className="m-2 chat-input-text" type="text" placeholder="Normal text" />
                    <Button className="m-2 chat-input-button" type="submit">Send</Button>
                </div>
               
                
            </Form>
        </Col>

    </Row>

    )
}

export default ChatPage
