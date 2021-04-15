import { React, useHistory } from 'react'

import { Button, Row, Col, Card } from "react-bootstrap"
// import { IoEllipseOutline } from 'react-icons/io5'
// import { Link } from "react-router-dom"
import axios from "axios"

function SubCourseList( {data, user, setSuccessMessage} ) {
    // console.log(data)

    // useEffect(()=>{
    //     handleCourseExists()
    // },[])

    // function handleCourseExists(){
    //     //course is found in array disable button
    //     if(user.courses.findIndex( course => course._id === el._id) != -1){
            
    //     }
    // }

    async function handleClick(course){
        try{
            let res = await axios.put(`user/${user._id}`, course)
            setSuccessMessage("subscribed to course!")
            setTimeout(() =>{
                setSuccessMessage("")
            },4000)
        }catch(err){
            console.log(err)
        }
    }
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
                     <Button variant="info" onClick={()=>{handleClick(el)}} > Subscribe </Button>
                 
                  {/* <Link to={`/my-courses/${el._id}`}>View Course</Link> */}
                </Card.Body>
                </Card>             
            </Col>
            ))

            }
            
        </Row>
    )
}

export default SubCourseList