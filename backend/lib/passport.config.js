const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user.model')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

passport.serializeUser(function(user,done){
    done(null,user.id)
})

passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
        done(err,user)
    })
})

passport.use('local',new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done){
        User.findOne({ email:email }, function(err,user){
            if(err) { return done(err) }

            if(!user) { 
                return done(null, false, { message: "incorrect username or password" })
            }

            if(!user.isValidPassword(password)){
                return done(null, false, { message: "incorrect username or password" })
            }

            return done(null, user)                                                                                                                                                                                                                                                                                                                                                                                                         
        });
    }
))

passport.use('jwt',new JwtStrategy({
    secretOrKey: process.env.SECRET, //change this to env file
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async function(token, done){
    try{
        return done(null, token.user)
    }catch(error){
        done(error)
    }

}))

module.exports = passport