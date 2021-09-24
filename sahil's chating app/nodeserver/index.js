// Node server which will handle scoket io connection
const io = require('socket.io')(8000)

const users = {};

io.on('connection', socket=>{
    socket.on('new-user-joined', name =>{
        console.log("new user", name)
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);        

    });
//If someone sends a message, broadcast it to other people

socket.on('send', message =>{
    socket.broadcast.emit('receive',{message: message, name: users[socket.id]})    

});

})