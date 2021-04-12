require('dotenv').config()
const router = require('express').Router()
const passport = require('passport')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

// const multer = require('multer')

// const localStore = require('../lib/multer.config')
// const upload = multer({ storage: localStore })
//upload.single("file")

router.post('/signup', async (req, res)=>{
    try{
        let { firstname, lastname, email, password } = req.body
        console.log(req.body)
        //check for repeat email/user
        const repeatUser = await User.findOne({email})

        if(repeatUser) { throw "user with email already exists" }

        const saveObj = {
            firstname,
            lastname,
            email,
            password
        }

        if(req.file){
            // check for req.file.mimetype to be image: 'image/jpeg' 'image/png',
            if(req.file.mimetype !=  'image/jpeg' && req.file.mimetype != 'image/png'){
                throw "please upload jpeg or png file"
            }

            const imagePath = req.file.path
            const uniqueFilename = new Date().toISOString()
            const uploadResponse = await cloudinary.uploader.upload(imagePath, {
                public_id: `${process.env.CLOUD_FILE}/${uniqueFilename}`
            }, (err, result) => {
                if (err){
                    return res.send(err)
                }
                // console.log("file uploaded to cloudinary")
                //remove file from server
                const fs = require('fs')
                fs.unlinkSync(imagePath)
                saveObj.profilePicture = result.url
            })
            // console.log(uploadResponse)
        }

        const newUser = new User(saveObj)
        console.log(newUser)
        await newUser.save()
   
        let payload = {
            user: {
                id: newUser._id
            }
        }

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 1000000
        }, (err,token) => {
            res.status(201).json({
                message: "successfully registered",
                user: newUser,
                token
            })
        } )
    }catch (error) {
        return res.status(400).json({ message: error || "registration failed" })
    }

})


router.post('/login', async (req, res, next) => {
    passport.authenticate('local', async (err, user, info) => {
          try {
            if (err || !user) {
                throw 'An error occurred.'                    
            }
            req.login(user, { session: false }, 
            async (error) => {
                if (error) return next(error);
            
                let payload = {
                    user: {
                        id: user._id, 
                    }
                }
                jwt.sign(payload, process.env.SECRET,{
                    expiresIn:1000000
                }, (err,token)=>{
                    return res.status(201).json({
                        message: "successfully logged in",
                        user: user,
                        token
                    })
                });
                }
            );
          } catch (error) {
            return next(error);
          }
        }
      )(req, res, next)
    }
  );

module.exports = router
