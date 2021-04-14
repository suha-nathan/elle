import React from 'react'
import { Col } from "react-bootstrap"
import BigLogo from "./BigLogo"
import SignupForm from "./SignupForm"

function Signup() {
    return (
        <div className="vh-100 vw-100 main-signup-page">
            <div className=" signup-window mx-auto d-flex justify-content-center">
                <Col md={7} className="left-screen d-flex justify-content-center p-4" ><BigLogo className="big-logo" /></Col>
                <Col md={5} className="right-screen" ><SignupForm/></Col>
            </div>
        </div>
    )
}

export default Signup
