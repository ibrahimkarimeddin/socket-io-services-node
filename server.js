const app = express();
const express = require('express');
const helemt = require('helmet')
const cors = require('cors');
const { verifyToken } = require('./src/utils/Socket/verifyTokenSocket');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// routes 
const router = require('./src/routes/api');

// socket io 
const { socketEvents } = require('./src/event/');

// app config 
app.use(express.json());
app.use(cors({origin:"*"}))
app.use(helemt())
app.use('/',router);



global.io = io; // Making io global


io.use((socket, next) => {
  // check for token 
  verifyToken(socket, next);
}).on("connection", socketEvents());

const PORT = 8001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



