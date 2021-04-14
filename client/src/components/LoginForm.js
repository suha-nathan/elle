import React, {useState} from 'react'
import {Row, Col, Container, Form, Button,FormControl} from 'react-bootstrap'
import {Link, Redirect} from "react-router-dom";
import * as Yup from "yup"
import {useFormik} from "formik"


const LoginForm = ({isAuth, login}) => {

    const loginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("please enter your email!"),
        password: Yup.string().required("please enter password!")
    })

    const { handleChange, errors, handleSubmit, touched, values } = useFormik({
        initialValues:{
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            login(values)
        }
    })

    if(isAuth){
        // console.log("Redirecting")
        return <Redirect to="/dashboard"/>
    }

    return (
        <div className="login-page-container">

            <Container className="d-flex flex-column justify-content-center align-items-center vh-100 ">
                <Row className="w-100 h-75 my-3 login-page-container__content">

                    <Col  className="login-page-container__login-section d-flex justify-content-center flex-column align-items-center">

                        <h2>Log In</h2>
                        <form data-testid="login-form" onSubmit={handleSubmit} >
                            <Form.Control
                                name="email"
                                placeholder="Email"
                                value={values.email}
                                className="my-2"
                                onChange={handleChange}
                            />
                            <div className={"emailError"}>
                            {errors.email && touched.email ?
                                <div className="error-message">{errors.email}</div>
                                :
                                null
                            }
                            </div>

                            <Form.Control
                                id="login-password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                type="password"
                                className="my-2"
                                onChange={handleChange}
                            />
                            {errors.password && touched.password ?
                                <div className="error-message">{errors.password}</div>
                                :
                                null
                            }

                            <Button
                                variant="primary"
                                className="my-2"
                                type="submit"
                            >Log In</Button>
                        </form>

                        <p className="login-page-container__login-section__signup-text">Don't have an account? <Link to="/signup">Sign Up Here</Link></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginForm