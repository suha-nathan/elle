import React, {useState} from 'react'
import {Col, Form, Row} from "react-bootstrap";

const SignupInputCol = ({name, placeholder, size, type, isTextarea, values, validateConfirmPassword, handleChange,errors,touched}) => {

    // console.log(values[name])
    // if(errors[name]){
    //     console.log(`${name} should show`)
    // }
    // if(touched[name]){
    //     console.log(`${name} is touched`)
    // }
    // console.log(errors[name])
    // console.log(touched[name])
    // console.log(type)
    return (
        <>
            <Col md={size} className="signup-input-col d-flex flex-column justify-content-center position-relative">
                <Form.Control
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    as={isTextarea && "textarea"}
                    rows={3}
                    value={values[name]}
                    onChange={handleChange}
                />
                    {touched[name] && errors[name] ?(
                        <p className="text-left my-1"> {errors[name]} </p>

                    ) : null
                    }

            </Col>

        </>

    )
}

export default SignupInputCol