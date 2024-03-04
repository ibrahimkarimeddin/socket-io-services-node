const jwt = require('jsonwebtoken');

// Middleware function to verify tokens
function verifyToken(socket, next) {

  // data from socket hand shake 
  const querySocket = socket.handshake?.query
  // get token from query 
  const tokenFromHandShake = querySocket?.token;

  if (!tokenFromHandShake) {
    return next(new Error('Authentication error'));
  }

  const secretKey = 'GET_YOUR_SECRET_FROM_ENV';

  try {
    
    const token = jwt.verify(tokenFromHandShake, secretKey);
 
    
    // join user to channel with his id => to send data base on id 
    socket.join('user_'+ token.id)
    next()
  } catch (error) {
    console.warn('Authentication error')
  }

 

}


module.exports = { verifyToken }