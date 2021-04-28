class WebSockets {
    users = []
    connection(client){

        //event fired when chat room is disconnected
        client.on("disconnect", ()=>{
            console.log("Disconnected")
            this.users = this.users.filter(user => user.socketId !== client.id )
        })

        //add identity of user mapped to the socket id
        client.on("identity", userId => {
            console.log("identity")
            this.users.push({
                socketId: client.id,
                userId: userId
            })
        })

        //subscribe person to chat and other user 
        client.on("subscribe", (room, otherUserId="") =>{
            console.log("subscribed")
            this.subscribeOtherUser(room, otherUserId)
            client.join(room)
        })

        //mute a chat room
        client.on("unsubscribe", room => {
            console.log(disconnected)
            client.leave(room)
        })
    }

    subscribeOtherUser(room, otherUserId){
        //prevent multiple presences of the same user
        const userSockets = this.users.filter(user => user.userId === otherUserId)
        userSockets.map(userInfo => {
            const socketConn = global.io.sockets.connected(userInfo.socketId)
            if(socketConn){ 
                socketConn.join(room)
            }
        })

    }
}

module.exports = new WebSockets