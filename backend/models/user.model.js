const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
        firstname: { type: String, required: true },
        lastname: { type:String, required: true },
        email: { type: String, required: true},
        password: { type: String, required: true},
        courses: [{ type: Schema.Types.ObjectId, ref: "Course" }]
    },
    {timestamps: true}
)


//hash password before saving user
userSchema.pre('save', function (next){
    let user = this
    //only hash password if it has been modified
    if( !user.isModified('password') ) return next()

    bcrypt.hash(user.password, 10).then(hashedPassword =>{
        user.password = hashedPassword
        next()
    })
})

userSchema.methods.isValidPassword = function(otherPassword){
    return bcrypt.compareSync(otherPassword,this.password)
}

module.exports = mongoose.model("User", userSchema)