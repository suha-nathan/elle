const express = require('express')
const router = express.Router()
const User = require('../models/user.model')


router.get('/user',async(req,res,next) => {
    try{
        console.log(req.user.id)
        const user = await User.findById(req.user.id)
        res.status(200).json({user: user})
    }catch(e){
        res.send(400).json({message:"failed to get data"})
    }
})




module.exports = router