import React from 'react'
import { Row, Col } from "react-bootstrap"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Pie, PieChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, Legend } from "recharts"
import radarData from "../data/radardata"
import pieData from "../data/pieData"
import lineData from "../data/lineData"

import MyCalendar from "./MyCalendar"

function Dashboard() {
    return (
        <div>
            <h3 className="header-text" >Hi Suha you've got 99 points so far!</h3>
            <Row className="justify-content-md-center" >
                <Col className="p-4" sm={6} md={4} >
                    <RadarChart className="chart-div" outerRadius={90} width={300} height={250} data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name="Mike" dataKey="A" stroke="#1C5085" fill="#1C5085" fillOpacity={0.4} />
                        {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
                        {/* <Legend /> */}
                    </RadarChart>
                </Col>

                <Col className="p-4" md={4} >
                    <PieChart className="chart-div" width={250} height={250}>
                        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#5787AB" label />
                        <Legend/>
                    </PieChart>               
                </Col>
                <Col className="p-4" md={4} >
                <LineChart className="chart-div"  width={300} height={200} data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="avg" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pt" stroke="#82ca9d" />
                </LineChart>
                </Col>

                <Col className="m-4 p-4" >
                    <MyCalendar/>
                </Col>



                
            </Row>
            
            
        </div>
    )
}

export default Dashboard
