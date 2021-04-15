const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const Course = require("../models/course.model")
// const Lesson = require('../models/lesson.model')

router.get('/course',async(req,res,next) => {
    try{
        const courseData = await Course.find()
        res.status(200).json({data:courseData})
    }catch(e){
        res.send(400).json({message:"failed to get data"})
    }
})

//make course with lessons array
router.post('/course', async(req,res,next)=>{
    try{
        console.log(req.body)
        let { title, coursePicture, trailerEmbedVideo, description , lessonArray } = req.body
        let saveObj={
            title,
            coursePicture,
            trailerEmbedVideo,
            description,
            lessons: lessonArray
        }
        const newCourse = new Course(saveObj)
        await newCourse.save()
        res.status(200).json({message:"Course added to DB", course: newCourse})

    }catch(err){ 

        res.status(400).json({message:"failed to add data"})
    }
})

router.get('/course/:id', async(req,res)=>{
    try{ 
         const getCourse = await Course.findById(req.params.id)
         res.status(200).json({message:"course gotten successfully", course: getCourse})
     }catch(err){
         res.status(400).json({message:"error updating course"})
     }
 })

// add lessons to course
router.put('/course/:id', async(req,res)=>{
   try{ 
        const editCourse = await Course.findByIdAndUpdate(req.params.id, { $push:{ lessons:req.body }})
        await editCourse.save()
        res.status(200).json({message:"course updated successfully", course: editCourse})
    }catch(err){
        res.status(400).json({message:"error updating course"})
    }
})


module.exports = router