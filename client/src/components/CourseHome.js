import React from 'react'
import { Link } from 'react-router-dom'
import studentData from "../data/studentData"
import { BsCheckCircle, BsCircle } from "react-icons/bs"
import { Row, Col, Accordion, Card, Button } from "react-bootstrap"

function CourseHome() {

    const courseIndivData = studentData.courseInformation[0] 

    return (
        <Row className="p-4">
            <Col md={8} >
        <h2>{courseIndivData.courseTitle}</h2>
        <div className="d-flex justify-content-center">
            <iframe 
                width="560" 
                height="315" 
                src={`${courseIndivData.trailerEmbedVideo}`}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; clipboard-write; 
                encrypted-media; gyroscope; 
                picture-in-picture" 
                allowfullscreen></iframe>
        </div>
        <div>                
            <h4>Overview</h4>
            <p>{courseIndivData.description}</p>
        </div>
           <Button variant="info"> <Link style={{color:"white"}} to={`/my-courses/${courseIndivData.id}/${courseIndivData.courseTitle}`}>Start Course</Link> </Button>
        </Col>

        <Col md={4}>
            <h2>
                Course Content
            </h2>
            <Accordion>
            {courseIndivData.lessons.map((el,index)=>(
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
                    {el.lessonTitle} <BsCheckCircle/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={`${index}`}>
                    <Card.Body>{el.lessonDescription}</Card.Body>
                </Accordion.Collapse>
                </Card>
                    ))}
            </Accordion>
           
        </Col>
            
        </Row>
    )
}

export default CourseHome

