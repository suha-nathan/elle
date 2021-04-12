const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
        title: {type:String, required:true},
        lessons: [ {type:Schema.Types.ObjectId, ref: "Lesson"} ],
        isComplete: {type:Boolean, default:false}
    },
    {timestamps:true}
)

module.exports = mongoose.model("Course", courseSchema)