const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
        title: {type:String, required:true},
        coursePicture: {type:String, required:true},
        description: {type:String, required:true},
        trailerEmbedVideo: {type:String, required:true},
        lessons: [ 
            {
                title: String,
                mainEmbedVideo: String,
                lessonDescription: String,
                quizList:[
                    {
                        quizNumber: String, 
                        questionTitle: String,
                        questionAnswerChoices: Array,
                        correctAnswer: String
                    }],
            isLessonComplete: {type:Boolean, default:false}
            }
        ],
        isCourseComplete: {type:Boolean, default:false}
    },
    {timestamps:true}
)

module.exports = mongoose.model("Course", courseSchema)