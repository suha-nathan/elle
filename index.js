const express = require('express')
const app = express()
// const logger = require('morgan')
// const socketio = require('socket.io')()
// const WebSockets = require('./lib/WebSockets')
// //connect to mongoDB 
require('./lib/mongo.config')

const cors = require('cors')
const flash = require('connect-flash')
const session = require('express-session')
const mongoStore = require('connect-mongo')
const passport = require('passport')
const path = require('path')

require('./lib/passport.config')

// app.use(express.static(path.join(__dirname, 'client/build')));
if(process.env.NODE_ENV === 'production') {  
    app.use(express.static(path.join(__dirname, 'client/build'))); 
 //  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })
}

// app.use(logger('dev'))
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



/** Create HTTP server. */
// const server = http.createServer(app);
// // Create Socket connection to
// global.io = socketio.listen(server)
// global.io.on('connection', (socket)=> console.log("a user connected"))
// //client => WebSockets.connection(client))
// /** Listen on provided port, on all network interfaces. */
// server.listen(process.env.PORT);
// /** Event listener for HTTP server "listening" event. */
// server.on("listening", () => {
//   console.log(`Listening on port:: http://localhost:${process.env.PORT}/`)
// });

const http = require('http').createServer(app);
const io = require('socket.io')(http)

let STATIC_CHANNELS = [{
    name: "Global chat",
    participants: 0,
    id: 1,
    sockets: []
},{
    name: 'New Chat',
    participants: 0,
    id: 2,
    sockets: []
}]


io.on('connection', (socket) => {
    console.log('new client connected')
    socket.emit('connection',null)
    socket.on('channel-join', id => {
        console.log("channel join ", id)
        STATIC_CHANNELS.forEach( c => {
            if (c.id === id){
                if (c.sockets.indexOf(socket.id) === -1){
                    c.sockets.push(socket.id)
                    c.sockets.participants++
                    io.emit('channel', c)
                }
            }else{
                let index = c.sockets.indexOf(socket.id)
                if (index !== -1){
                    c.sockets.splice(index, 1)
                    c.participants--
                    io.emit('channel', c)
                }
            }
        })
        return id
    })
    socket.on('send-message', message => {
        io.emit('message', message)
    })
    socket.on('disconnect', () => {
        STATIC_CHANNELS.forEach(c => {
            let index = c.sockets.indexOf(socket.id)
            if (index != -1 ){
                c.sockets.splice(index, 1)
                c.participants--
                io.emit('channel', c)
            }
        })
    })
})

app.get('/getChannels', (req,res) => {
    res.json({
        channels: STATIC_CHANNELS
    })
})

app.use('/account', require("./routes/auth.route"))
app.use("/",passport.authenticate('jwt', { session: false }), require("./routes/course.route"))
app.use("/",passport.authenticate('jwt', { session: false }), require("./routes/user.route"))
app.use("/chat",passport.authenticate('jwt', { session: false }), require("./routes/chat.route"))

app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})

app.use((req, res) => {
    res.status(404).json({ message:"route not found"})
})

http.listen(process.env.PORT, () =>{console.log(`listening on port ${process.env.PORT}`)})


// app.listen(process.env.PORT, () =>{console.log(`listening on port ${process.env.PORT}`)})