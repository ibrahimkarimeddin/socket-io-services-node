const { handelDashboardSocketDebug } = require("./SocketDashboardDebugEvent");
const { handelRemoveDriver } = require("./TrackDriverForDashboard");


function handleOffline(socket) {
    return () => {
      console.log("disconnecting");
      
      // your logic when user are offlie 
      
      handelDashboardSocketDebug('disconnect' , socket.id , null , null )
    };
  }

  module.exports = {handleOffline}