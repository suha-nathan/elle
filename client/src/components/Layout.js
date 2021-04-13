import React from 'react'
import { Row, Col, Image, Navbar } from 'react-bootstrap'
import SideNavbar from './SideNavbar'


export default function Layout({ children }) {
    return (
        <>
            <Row className="vw-100">
                <Col md={2} >
                    <SideNavbar/>
                </Col>

                <Col md={10} >
                <Navbar>
                    {/* <Navbar.Brand >Hello Mark</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        {/* <h2> Hello Suha </h2>
                        Signed in as: <a href="#login">Mark Otto</a> */}
                        </Navbar.Text>
                        <Image src="https://via.placeholder.com/80" roundedCircle />
                    </Navbar.Collapse>
                </Navbar>
                    {children}
                </Col>
            </Row>
        </>
    )
}
