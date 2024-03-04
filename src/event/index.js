
const { handleOffline } = require('./DisconnectEvent');
const { handleLeaveRoom } = require('./LeaveRoomEvent');
const { handleJoinRoom } = require('./JoinRoomEvent');
const { handelDashboardSocketDebug } = require('./SocketDashboardDebugEvent');

function socketEvents() {

  return (socket)=>{
    
    handelDashboardSocketDebug('connect' , socket.id , null , null )

    console.log('connect success');
    socket.on("offline", handleOffline(socket));
    socket.on("join_room", handleJoinRoom(socket));
    socket.on('leave_room', handleLeaveRoom(socket));
    socket.on('disconnect', handleOffline(socket));
    
  }

}









// Define other socket event handlers in a similar fashion

module.exports = { socketEvents };
