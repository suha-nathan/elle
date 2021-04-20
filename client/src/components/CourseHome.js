import { React, useEffect, useState } from 'react'
import { Link, useParams, NavLink } from 'react-router-dom'
import { BsCheckCircle, BsCircle } from "react-icons/bs"
import { Row, Col, Accordion, Card, Button } from "react-bootstrap"
import axios from "axios"

function CourseHome({ currentCourse, setCurrentCourse }) {
    
    const params = useParams()
    // const [currentCourse, setCurrentCourse ] = useState({})

    useEffect(()=>{
        loadData()
    },[])
    async function loadData(){
        try{
            let res = await axios.get(`/course/${params.id}` )
            let urlTitle = res.data.course.title.replace(/\s+/g, "")
            let newCourseObject = { ...res.data.course, urlTitle: urlTitle}
            setCurrentCourse(newCourseObject)
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
                frameBorder="0" 
                allow="accelerometer; 
                autoplay; clipboard-write; 
                encrypted-media; gyroscope; 
                picture-in-picture" 
                allowFullScreen></iframe>
        </div>
        <div>                
            <h4>Overview</h4>
            <p>{currentCourse.description}</p>
        </div>
           <Button variant="info" disabled> 
             Start Course
                {/* <NavLink 
                    style={{color:"white"}} 
                    to={`/my-courses/${currentCourse._id}/${currentCourse.urlTitle}`}
                    isActive={false}>
                    Start Course
                </NavLink>  */}
            </Button>
        </Col>

        <Col md={4}>
            <h2>
                Course Content
            </h2>
            <Accordion>
            {currentCourse.lessons?.map((lesson,index)=>(
                <Card key={index}>
                    <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
                        {lesson.title} <BsCheckCircle/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={`${index}`}>
                        <Card.Body>{lesson.lessonDescription}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                    ))}
            </Accordion>
           
        </Col>
            
        </Row>
    )
}

export default CourseHome

