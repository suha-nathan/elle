import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Row, Col, Card } from "react-bootstrap"
// import { IoEllipseOutline } from 'react-icons/io5'
// import { Link } from "react-router-dom"
import axios from "axios"

function SubCourseList({ allCourseData, user, setSuccessMessage, loadUser }) {
    // console.log(data)
    const [ data, setData ] = useState([])
    const history = useHistory()

    useEffect(()=>{
        setData([])
        allCourseData.forEach((el,idx)=>{
            if (user.courses.findIndex(course => course._id === el._id) != -1 ){ 
                let newObj = {...el, isSubbed:true }
                setData(prevState=>( [...prevState, newObj] ))
            }else{
                let newObj = {...el, isSubbed:false }
                setData(prevState=>( [...prevState, newObj] ))
            } 
            
            })
            
        },[])

    async function handleClick(course){
        try{
            let res = await axios.put(`user/${user._id}`, course)
            loadUser()
            setSuccessMessage("subscribed to course!")
            setTimeout(() =>{
                setSuccessMessage("")
            },4000)
            
            history.push(`/my-courses/${course._id}`)

        }catch(err){
            console.log(err)
        }
    }

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
                  {el.isSubbed?
                    <Button variant="info" disabled > Already Subscribed! </Button>
                    :
                    <Button variant="info" onClick={()=>{handleClick(el)}} > Subscribe </Button>

                  }

                     
                 
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