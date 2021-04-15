import React, { useState } from 'react'
import { Row, Col, Container, Form, Button, Image } from 'react-bootstrap'
import { Link, Redirect } from "react-router-dom";
import * as Yup from "yup"
import { useFormik } from "formik"


const LoginForm = ({ isAuth, login }) => {

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
            console.log("logging in")
            login(values)
        }
    })

    if(isAuth){
        return <Redirect to="/dashboard"/>
    }

    return (
        // <div className="login-page-container">

            <Container className="d-flex flex-column align-items-center p-3">
                {/* <Image className="login-image p-1" src="https://i.pinimg.com/564x/c0/60/eb/c060ebe8e64c493794266bb9075a9b6b.jpg" width="150rem" height="150rem" roundedCircle /> */}
                       
                <h2>Log In</h2>
                <form data-testid="login-form" onSubmit={handleSubmit} >
                    <Form.Control
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        className="my-2"s
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

                <p style={{position: 'absolute', bottom:'1rem'}}>Don't have an account? <Link to="/signup">Sign Up Here</Link></p>


            </Container>
        // </div>
    )
}

export default LoginForm