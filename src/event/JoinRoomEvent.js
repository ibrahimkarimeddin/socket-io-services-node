const { handelDashboardSocketDebug } = require("./SocketDashboardDebugEvent");


function handleJoinRoom(socket ){

    return (room_name) =>{
        console.log(room_name);  
        // join user to room that send   
          socket.join(room_name);
          // send event to dashboard debug
          handelDashboardSocketDebug('join_room' , socket.id , room_name , room_name)

    }
  }

  

module.exports = {handleJoinRoom}