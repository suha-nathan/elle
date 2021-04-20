import { React, useHistory, useEffect } from 'react'
import axios from 'axios'
import { Button, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function CourseList({ user, loadUser, setSuccessMessage }) {
  
  async function handleClick(course){
    let search = { courseId: course._id }
    await axios.put(`/user/${user._id}/delete`, search)
    loadUser()
    setSuccessMessage("updated your courses successfully!")  
    setTimeout(() =>{
      setSuccessMessage("")
    }, 4000)  
  }

  return (
      <Row className="mx-auto">
          {user.courses?.map((course,index)=>(
          <Col key = {index} sm={12} md={6} xl={3} className="m-4">
              <Card className="chart-div" border="light" style={{ width: '18rem' }}>         
              <Card.Img className="course-image" variant="top" src={course.coursePicture? course.coursePicture : "https://via.placeholder.com/300x150" } />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>
                  {course.description}
                </Card.Text>
                <Link className= "pr-3"  to={`/my-courses/${course._id}/`}>View Course</Link>
                <Button variant="danger" onClick={()=>handleClick(course)}> Delete </Button>
              </Card.Body>
              </Card>             
          </Col>
          ))

          }
          
      </Row>
  )
}

export default CourseList
