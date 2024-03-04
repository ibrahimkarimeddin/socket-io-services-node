


// this function are for debug and track event to show in your dashboard 
// you need only listen to event   dashboard_debug  from your cient side 
function handelDashboardSocketDebug (event , socket_id , room , data  ){
    

        io.emit('dashboard_debug' , {
            event ,
            socket_id ,
            room , 
            data
        } )
}

module.exports = {handelDashboardSocketDebug}