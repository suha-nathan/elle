const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lessonSchema = new Schema({
        title: {type:String, required:true},
        content:[
            {
                video: String, 
                description: String
            }
        ],
        isComplete: {type:Boolean, default:false}
    },
    {timestamps:true}
)

module.exports = mongoose.model("Lesson", lessonSchema)