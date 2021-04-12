const express = require('express')
const router = express.Router()

router.get('/course',(req,res,next) => {
    res.json({
        message:"made it to secure route",
        user:req.user,
    })
})

module.exports = router