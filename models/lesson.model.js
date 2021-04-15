const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lessonSchema = new Schema({
        title: {type:String, required:true},
        mainEmbedVideo: {type:String, required:true},
        lessonDescription: {type:String, required:true},
        quizList:[
            {
                quizNumber: String, 
                questionTitle: String,
                questionAnswerChoices: Array,
                correctAnswer: String
            }
        ],
        isComplete: {type:Boolean, default:false}
    },
    {timestamps:true}
)

module.exports = mongoose.model("Lesson", lessonSchema)