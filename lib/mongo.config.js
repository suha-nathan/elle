require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.PROD_DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:true
}).then(()=>{
    console.log('--mongodb connected--');
}).catch(e=>{
    console.log('error connecting')
})

module.exports = mongoose