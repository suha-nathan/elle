import React from 'react'
import { Col } from "react-bootstrap"
import BigLogo from "./BigLogo"
import SignupForm from "./SignupForm"

function Signup({ isAuth, signUp }) {
    return (
        <div className="vh-100 vw-100 main-signup-page">
            <div className=" signup-window mx-auto d-flex justify-content-center">
                <Col md={7} className="left-screen d-flex justify-content-center p-4" ><BigLogo className="big-logo" /></Col>
                <Col md={5} className="right-screen d-flex justify-content-center " ><SignupForm isAuth={isAuth} signUp={signUp}/></Col>
            </div>
        </div>
    )
}

export default Signup
