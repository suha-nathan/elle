import React, { useState } from 'react'
import { Button, Col, Container, Image, Row, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import SignupInputCol from "./SignupInputCol";
import * as Yup from "yup"
import { useFormik } from "formik"

const SignupForm = ({ isAuth, signUp }) => {
    const [baseImageUpload, setBaseImageUpload] = useState(null)
    const [thumbnailImage, setThumbnailImage] = useState(null)

    function onChange(e){
        setThumbnailImage(URL.createObjectURL(e.target.files[0]))
        setBaseImageUpload(e.target.files[0])
    }

    const signupSchema = Yup.object().shape({
        file: Yup.mixed(),
        firstname: Yup.string().required("Please enter your first name"),
        lastname: Yup.string().required("Please enter your first name"),
        email: Yup.string().email("Invalid Email").required("Please enter your email"),
        password: Yup.string().required("password is required"),
        confirmPassword: Yup.string().when("password",{
            is: val=> (val && val.length>0), 
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "password doesn't match"
            )
        }),
        terms: Yup.bool().required().oneOf([true], 'terms must be accepted')
    })

    const { handleChange,errors, handleSubmit, touched, values } = useFormik({
        initialValues: {
            file:null,
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
            terms:false
        },
        validationSchema: signupSchema,
        onSubmit: (values) => {

            let {  firstname, lastname, email, password } = values
            // let saveObject ={
            //     firstname,
            //     lastname,
            //     email,
            //     password
            // }

            const formData = new FormData()
            formData.append("firstname",firstname)
            formData.append("lastname",lastname)
            formData.append("email",email)
            formData.append("password",password)
            formData.append("file",baseImageUpload)
            console.log("signing up")
            signUp(formData)
            // console.log(saveObject)
            // signUp(saveObject)

        }
    })

    if(isAuth){
        return <Redirect to={"/dashboard"}/>
    }

    return (
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="signup-page-container__content w-100 h-150 d-flex flex-column justify-content-between">
                        <Row className="h-100 ">
                            <Col className="signup-input-col">
                                {/* <Row className="d-flex justify-content-between align-items-center px-5 h-100"> */}
                                    {!thumbnailImage ?
                                        <Image src="https://via.placeholder.com/80" className="rounded-circle"/>
                                        :
                                        <Image src={thumbnailImage} width="80px" height="80px" className="rounded-circle"/>
                                    }

                                    <Form.Group>
                                        <Form.File
                                            className="position-relative"
                                            name="file"
                                            label="File"
                                            onChange={ e => onChange(e) }
                                            feedback={errors.file}
                                            feedbackTooltip
                                        />
                                    </Form.Group>
 
                                {/* </Row> */}
                            </Col>

                            <SignupInputCol
                                placeholder="First Name"
                                name="firstname"
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                touched={touched}
                                size={4}/>

                            <SignupInputCol
                                placeholder="Last Name"
                                name="lastname"
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                touched={touched}
                                size={4} />

                            <SignupInputCol
                                placeholder="Email"
                                name="email"
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                touched={touched}
                                size={4}/>

                            <SignupInputCol
                                placeholder="Password"
                                name="password"
                                type="password"
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                touched={touched}
                                size={4}/>

                            <SignupInputCol
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                touched={touched}
                                size={4}/>
                        </Row>
                        <Form.Group>
                            <Form.Check
                                type="checkbox"
                                required
                                name="terms"
                                label="I agree to terms and conditions"
                                onChange={handleChange}
                                feedback={errors.terms}
                                feedbackTooltip
                                id="inlineFormCheck"
                            />
                        </Form.Group>
                        <div className="signup-page-container__signup-row w-100">
                            <Row>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Button variant="primary" type="submit" >Sign Up</Button>
                                </Col>
                            </Row>

                        </div>
                        <p className="m-0 pl-0 " style={{position: 'absolute', bottom:'1rem'}}>Already registered? <Link to="/login">Login Here</Link></p>
                    </div>
                </Form>
            </Container>


    )
}

export default SignupForm
