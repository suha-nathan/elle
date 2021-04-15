import React from 'react'
import { Link } from 'react-router-dom'
import { BsChatDots, BsPerson, BsLayers } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import { IoGameControllerOutline, IoSettingsOutline } from "react-icons/io5"

import Elephant from "./Elephant"


export default function SideNavbar() {
    const [sidebar, setSideBar] = React.useState(true)

    return (
        <nav className ="nav sticky-top flex-column vh-100 " style={{backgroundColor:'#99BFD3'}} >
            <div className="mx-auto p-2 m-2">
                <h3 ><Elephant/> Elle </h3>
            </div>     
            <Link className="nav-link" to="/dashboard"> <AiOutlineHome /> Dashboard</Link>
            <Link class="nav-link" to="/my-courses"> <BsLayers/> My Courses</Link>
            <Link class="nav-link" to="/subscribe"> <BsLayers/> Subscribe to Courses</Link>
            <Link class="nav-link" to="/create-course"> <BsLayers/> Create Course</Link>
            <Link class="nav-link" to="/chat"> <BsChatDots/> Messages/Chat </Link>
            <Link class="nav-link" to="/games"> <IoGameControllerOutline/> Games</Link>
            <Link class="nav-link" to="/my-profile"> <BsPerson/> My Profile</Link>
            <Link class="nav-link" to="/settings"> <IoSettingsOutline/> Settings</Link>
        </nav>
    )
}

