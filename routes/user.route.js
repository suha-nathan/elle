const express = require('express')
const router = express.Router()
const User = require('../models/user.model')


router.get('/user',async(req,res,next) => {
    try{
        console.log(req.user)
        const users = await User.find()
        res.status(200).json({users: users})
    }catch(e){
        res.status(400).json({message:"failed to get data"})
    }
})

router.get('/user/:id',async(req,res,next) => {
    try{
        const user = await User.findById(req.user.id).populate('courses')
        res.status(200).json({user: user})
    }catch(e){
        console.log("Error getting user")
        res.status(400).json({message:"failed to get data"})
    }
})

router.put('/user/:id',async(req,res,next) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, {
            $push: { 
                courses:req.body
            }
        })
        res.status(200).json({message:"success"})
    }catch(e){
        res.status(400).json({message:"failed to update data"})
    }
})

router.put("/user/:id/delete", async(req, res, next)=>{
    try{
        console.log(req.body.courseId)
        const user = await User.findByIdAndUpdate(req.params.id, {
            $pull: {
                courses: req.body.courseId
            }
        })

        res.status(200).json({message:"updated successfully"})
    }catch(err){
        res.status(500).json({message:"update failed"})
    }
})



module.exports = router