const path = require('path');
const express = require('express');
const app=express();

app.set('port', process.env.PORT||3000);

app.use(express.static(path.join(__dirname, 'public')));
//Start server
const server = app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});

//static
const SocketIO = require('socket.io');
const io = SocketIO(server);

//websockets
io.on('connection', (socket)=>{
    console.log('New Connection', socket.id);

    socket.on('chat:message',(data)=>{
        io.sockets.emit('chat:message', data);
    })

    socket.on('chat:typing', (data)=>{
        socket.broadcast.emit('chat:typing', data)
    })
});




