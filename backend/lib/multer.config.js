const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination:"./profileuploads",
    filename: function(req,file,cb){
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname))
    }
})


module.exports = storage