const mongoose = require('mongoose')
// import { v4 as uuidv4 } from 'from uuidv4'
const { v4: uuidv4 } = require('uuid');

const chatRoomSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4().replace(/\-/g, ""),
      },
    userIds: Array,
    chatInitiator: String
},{
    timestamps: true,
    collection: "chatrooms"
})

/* 
@param {String} userId - id of user
@return {Array} array of all chatroom that the user belongs to
 */
chatRoomSchema.statics.getChatRoomsByUserId = async function(userId){
    try{
        const rooms = await this.find({ userIds:  { $all: [userId] } })
        return rooms
    }catch(error){
        throw error
    }
}

/* 
@param {String} roomId - id of chat room
@return {Object} chatroom
*/

chatRoomSchema.statics.getChatRoomsByRoomId = async function(roomId){
    try{
        const room = await this.findOne({ _id: roomId })
        return room
    }catch(error){
        throw error
    }
}

/*  @param {Array} userIds - array of string of user ids 
    @param {String} chatInitiator = user who intiated the chat
 */

chatRoomSchema.statics.initiateChat = async function(userIds, chatInitiator){
    try{
        const availableRoom = await this.findOne({ 
            userIds: {
                $size: userIds.length,
                $all: [...userIds]
            }
        })

        if(availableRoom){ 
            return {
                isNew: false,
                message: "retrieving old chat room",
                chatRoomId: availableRoom._id
            }
        }

        const newRoom = await this.create({userIds, chatInitiator})
        console.log("new room is",newRoom)
        return {
            isNew: true,
            message: "creating new chat room",
            chatRoomId: newRoom._id
        }

    }catch(error){
        throw error
    }
}

module.exports = mongoose.model("ChatRoom", chatRoomSchema)