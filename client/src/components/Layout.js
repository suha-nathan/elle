import React from 'react'
import { Row, Col, Image, Navbar, Button } from 'react-bootstrap'
import SideNavbar from './SideNavbar'


export default function Layout({ children, logOut, user }) {
    return (
        <>
            <Row className="vw-100">
                <Col sm={4} md={3} lg={2} >
                    <SideNavbar/>
                </Col>

                <Col sm={8} md={9} lg={10} >

                    <Navbar className="justify-content-end">
                    <Button className="m-2" variant="outline-info" onClick={ ()=>{logOut()}} >Log Out</Button>
                        <Image 
                        src={user?.profilePicture ? user.profilePicture: "https://via.placeholder.com/80" }
                        width = "80rem"
                        height = "80rem"
                        roundedCircle />
                    </Navbar>
                    {children}
                </Col>
            </Row>
        </>
    )
}
