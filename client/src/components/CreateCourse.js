import { React, useState } from 'react'
import { Form, Col, Button } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import * as Yup from "yup" 
import { useFormik } from "formik"
import axios from "axios"
// {
//     "title": "Science",
//     "coursePicture": "https://www.sciencenews.org/wp-content/uploads/2020/05/052020_ts_scientific-words_feat-1028x579.jpg",
//     "trailerEmbedVideo": "https://www.youtube.com/embed/z-R3DShHbkA",
//     "description": "science is amazing it consists of the natural world and blah blah",
//     "lessonArray": [
//         {
//             "title": "Cells at Work",
//             "mainEmbedVideo": "https://www.youtube.com/embed/cj8dDTHGJBY",
//             "lessonDescription": "lorem ipsum doler amit blah blah"
//         },
//         {
//             "title": "Light and its Effects",
//             "mainEmbedVideo": "https://www.youtube.com/embed/IXxZRZxafEQ",
//             "lessonDescription": "We are so used to some things that we stopped wondering about them. Like light. What is light? Some kind of wavy thing, right? Kind of"
//         }
//     ]
// }

function CreateCourse({ setSuccessMessage,setErrorMessage }) {
    const [lessonList, setLessonList] = useState([{ 
        title: "", 
        mainEmbedVideo: "",
        lessonDescription: "",
        }]);
    const [isCourseCreated, setCourseCreated] = useState(false)

    // const [quizList, setquizList] = useState([{ 
    //     title: "", 
    //     mainEmbedVideo: "",
    //     lessonDescription: "",
    //     }]);
    
    async function uploadCourse(courseData){
        try{
            let res = await axios.post("/course", courseData)
            setSuccessMessage("created Course!")
            setTimeout(() =>{
                setSuccessMessage("")
            },4000)
        }catch(err){
            setErrorMessage("created Course!")
            setTimeout(() =>{
                setErrorMessage("")
            },4000)
        }        
    }

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...lessonList];
        list[index][name] = value;
        setLessonList(list);
    };
    
    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...lessonList];
        list.splice(index, 1);
        setLessonList(list);
    };
    
    // handle click event of the Add button
    const handleAddClick = () => {
        setLessonList([...lessonList, { title: "", mainEmbedVideo: "", lessonDescription: "" }]);
    };

    const courseSchema = Yup.object().shape({
        title: Yup.string().required("pls enter title"),
        trailerEmbedVideo: Yup.string().required("pls enter embed video link"),
        coursePicture: Yup.string().required("pls enter picture link"),
        description: Yup.string().required("pls enter lesson description"),
    })

    const { handleChange,errors, handleSubmit, touched, values } = useFormik({
        initialValues: {
            title: "",
            coursePicture: "",
            trailerEmbedVideo: "",
            description: ""
        },
        validationSchema: courseSchema,
        onSubmit: (values) => {

            let { title, coursePicture, trailerEmbedVideo, description } = values
            let newCourse = {
                title,
                coursePicture,
                trailerEmbedVideo,
                description,
                lessonArray: lessonList
            }
            uploadCourse(newCourse)

        }
    })
    //https://i.pinimg.com/564x/4e/62/21/4e6221871c61e1e27cb04a214f4c1a89.jpg
    // https://www.youtube.com/embed/z-R3DShHbkA

    if(isCourseCreated){ 
        return <Redirect to={"/my-courses"}/>
    }

    return (
        <div>
            <Form  onSubmit={handleSubmit}>
            <Form.Group controlId="validationFormik103" >
                <Form.Control 
                    name="title"
                    placeholder="Title of Course"
                    value={values.title}
                    onChange={handleChange}
                    isInvalid={!!errors.title}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.title}
                    </Form.Control.Feedback>
             </Form.Group>
             <Form.Group>
                <Form.Control 
                    name="coursePicture"
                    placeholder="Enter link to Picture"
                    value={values.coursePicture}
                    onChange={handleChange}
                    isInvalid={!!errors.coursePicture}/>

            </Form.Group>

             <Form.Group>
                <Form.Control 
                    name="trailerEmbedVideo"
                    placeholder="Enter Embedded Video Link"
                    value={values.trailerEmbedVideo}
                    onChange={handleChange}
                    isInvalid={!!errors.coursePicture}/>
            </Form.Group>

            <Form.Group>
                <Form.Control 
                    name="description"
                    placeholder="Enter Course Description"
                    value={values.description}
                    onChange={handleChange}
                    isInvalid={!!errors.coursePicture}/>
            </Form.Group>

            <h5> Add Lessons </h5>
            {lessonList.map((x, i) => {
                return (
                    <div key={i}>
                     <Form.Row>
                        <Col>
                        <Form.Control 
                            name="title"
                            placeholder="Title of Lesson"
                            value={x.title}
                            onChange={e => handleInputChange(e, i)} />
                        </Col>

                        <Col>
                            <Form.Control 
                                name="mainEmbedVideo"
                                placeholder="Enter Embedded Video Link"
                                value={x.mainEmbedVideo}
                                onChange={e => handleInputChange(e, i)} />
                        </Col>
                        <Col>
                            <Form.Control 
                                name="lessonDescription"
                                placeholder="Enter Lesson Description"
                                value={x.lessonDescription}
                                onChange={e => handleInputChange(e, i)} />
                        </Col>


                    <div className="btn-box">
                        {lessonList.length !== 1 && 
                        <Button variant="danger" onClick={() => handleRemoveClick(i)} >Remove</Button>}
                        {lessonList.length - 1 === i && 
                        <Button variant="success" onClick={handleAddClick} >Add</Button>}
                    </div>
                    </Form.Row>
                    <br/>
                    </div>
                );
                })}
                <Button type="submit" onClick={(e) => handleSubmit(e)}>Submit Course</Button>
            </Form>
        </div>
    )
}

export default CreateCourse
