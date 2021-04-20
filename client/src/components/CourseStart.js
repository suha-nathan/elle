import React from 'react'
import { Link } from 'react-router-dom'

function CourseStart( {currentCourse} ) {
    // console.log(currentCourse)
    return (
        <div>
            <h2>{currentCourse.title}</h2>
            {/* {currentCourse.lessons.map((lesson,index)=>(
                <>
                <h3 key={index}>{lesson.title}</h3>
                </>
            ))}
            
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <Link className="page-item" to="#">Previous</Link>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
</nav> */}

        </div>
    )
}

export default CourseStart
