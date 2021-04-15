const express = require('express')
const router = express.Router()
const User = require('../models/user.model')


router.get('/user',async(req,res,next) => {
    try{
        console.log(req.user.id)
        const user = await User.findById(req.user.id).populate('courses')
        res.status(200).json({user: user})
    }catch(e){
        res.send(400).json({message:"failed to get data"})
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
        res.send(400).json({message:"failed to get data"})
    }
})



module.exports = router