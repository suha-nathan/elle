import { React, useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import studentData from "../data/studentData"
import { BsCheckCircle, BsCircle } from "react-icons/bs"
import { Row, Col, Accordion, Card, Button } from "react-bootstrap"
import axios from "axios"

function CourseHome({courseData}) {
    
    const courseIndivData = studentData.courseInformation[0] 
    const params = useParams()
    const [currentCourse, setCurrentCourse ] = useState({})

    useEffect(()=>{
        loadData()
    },[])
    async function loadData(){
        try{
            let res = await axios.get(`/course/${params.id}` )
            setCurrentCourse(res.data.course)
        }catch(err){
            console.log(err)
        }
        
    }

    return (
        <Row className="p-4">
            <Col md={8} >
        <h2>{currentCourse.title}</h2>
        <div className="d-flex justify-content-center">
            <iframe 
                width="560" 
                height="315" 
                src={`${currentCourse.trailerEmbedVideo}`}
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
            <p>{currentCourse.description}</p>
        </div>
           <Button variant="info"> 
                <Link style={{color:"white"}} to={`/my-courses/${courseIndivData.id}/${courseIndivData.courseTitle}`}>
                    Start Course
                </Link> 
            </Button>
        </Col>

        <Col md={4}>
            <h2>
                Course Content
            </h2>
            <Accordion>
            {currentCourse.lessons?.map((el,index)=>(
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
                    {el.title} <BsCheckCircle/>
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

