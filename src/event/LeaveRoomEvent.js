const { handelDashboardSocketDebug } = require("./SocketDashboardDebugEvent");

function handleLeaveRoom(socket){
    return (room_name)=>{
      socket.leave(room_name);
      handelDashboardSocketDebug('leave_room' , socket.id , room_name , room_name )

    }
  }
  
  


module.exports = {handleLeaveRoom}