


async function handleRoot(req, res) {
  const OnlineUser = []
  
  io.sockets.adapter.rooms.forEach((value , key)=>{
    const socketId =  [...value][0]
    const user  = io.sockets.sockets.get(socketId)['user'];
    OnlineUser.push(user)
  
})
  res.json(OnlineUser);
}


module.exports = { handleRoot };
