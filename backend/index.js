const express = require('express')
const app = express()

//connect to mongoDB 
require('./lib/mongo.config')

const cors = require('cors')
const flash = require('connect-flash')
const session = require('express-session')
const mongoStore = require('connect-mongo')
const passport = require('passport')

const methodOverride = require('method-override')


require('./lib/passport.config')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use(session({
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    store:mongoStore.create({mongoUrl:process.env.DB})
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())



app.use('/account', require("./routes/auth.route"))
app.use("/",passport.authenticate('jwt', { session: false }), require("./routes/course.route"))
app.use("/",passport.authenticate('jwt', { session: false }), require("./routes/user.route"))


app.use((req, res) => {
    res.status(404).json({ message:"route not found"})
})

app.listen(process.env.PORT, () =>{console.log(`listening on port ${process.env.PORT}`)})