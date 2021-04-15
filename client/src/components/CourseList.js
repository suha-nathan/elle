import { React, useHistory } from 'react'

import { Button, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function CourseList( {data} ) {
    console.log(data)
    return (
        <Row className="mx-auto">
            {data?.map((el,index)=>(
            <Col key = {index} sm={12} md={6} xl={3} className="m-4">
                <Card className="chart-div" border="light" style={{ width: '18rem' }}>
                
                <Card.Img className="course-image" variant="top" src={el.coursePicture? el.coursePicture : "https://via.placeholder.com/300x150" } />
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>
                    {el.description}
                  </Card.Text>
                  <Link to={`/my-courses/${el._id}`}>View Course</Link>
                </Card.Body>
                </Card>             
            </Col>
            ))

            }
            
        </Row>
    )
}

export default CourseList
