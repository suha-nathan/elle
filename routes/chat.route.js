const express = require('express')
const ChatRoom = require("../models/chatroom.model")
const ChatMessage = require("../models/chatmessage.model")
const User = require("../models/user.model")

const router = express.Router()

router.get("/", async(req, res, next) =>{
    try{
        const currentLoggedUser = req.user.id
        const options = {
            page: parseInt(req.query.page) || 0,
            limit: parseInt(req.query.limit) || 10
        }

        const rooms = await ChatRoom.getChatRoomsByUserId(currentLoggedUser)
        const roomIds = rooms.map(room => room._id)

        const recentConversation = await ChatMessage.getRecentConversation(roomIds, options, currentLoggedUser)
        return res.status(200).json({ success: true, conversation: recentConversation })
    }catch(error){
        return res.status(400).json({ success: false, error: error })
    }
})

router.get("/:roomId", async(req, res)=>{
    try{
        const { roomId } = req.params
        console.log(req.params)
        const room = await ChatRoom.getChatRoomsByRoomId(roomId)
        console.log("room is",room)

        if (!room){
            return res.status(400).json({success: false, message: "no room exists for this id"})
        }

        const users = await User.find({ _id: { $in: room.userIds } })
        const options = {
            page: parseInt(req.query.page) || 0,
            limit: parseInt(req.query.limit) || 10
        }
        const conversation = await ChatMessage.getConversationByRoomId(roomId, options)
        console.log(conversation)
        console.log(users)
        return res.status(200).json({ success: true, conversation, users})

    }catch(error){
        return res.status(500).json({ succcess:false, error })
    }
})


router.post("/initiate", async(req,res)=>{
    try{
        console.log(req.body)
        const { userIds } = req.body
        const chatInitiator = req.user.id
        const allUserIds = [...userIds, chatInitiator]
        console.log(allUserIds)
        const chatRoom = await ChatRoom.initiateChat(allUserIds, chatInitiator)
        console.log("chat room is", chatRoom)
        return res.status(200).json({ success:true, chatRoom })
    }catch(error){
        return res.status(500).json({ success: false, error})
    }
})


router.post('/:roomId/message', async(req,res)=>{
    try{
        const { roomId } = req.params
        const messagePayload = {
            messageText: req.body.messageText
        }
        const currentLoggedUser = req.user.id
        console.log(req.user.id)
        const post = await ChatMessage.createPostInChatRoom(roomId, messagePayload, currentLoggedUser)
        // global.io.sockets.in(roomId).emit('new message', { message: post })
         console.log(post)
        return res.status(200).json({ success: true, post})
    }catch(error){
        return res.status(500).json({ success: false, error})
    }

})

router.put("/:roomId/mark-read", async(req,res)=>{
    try {
        const { roomId } = req.params;
        console.log(roomId)
        const room = await ChatRoom.getChatRoomsByRoomId(roomId)
        if (!room) {
          return res.status(400).json({
            success: false,
            message: 'No room exists for this id',
          })
        }
  
        const currentLoggedUser = req.userId;
        const result = await ChatMessage.markMessageRead(roomId, currentLoggedUser);
        return res.status(200).json({ success: true, data: result });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error });
      }

})

module.exports = router
