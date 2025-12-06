const ws= require('ws');
const http=require("http");

const httpserver=http.createServer()

httpserver.listen(3000,()=>console.log("Http server started"))
// const wsServer= new ws.WebSocketServer({port:3000});
const wsServer=new ws.WebSocketServer({
    server:httpserver
})

wsServer.on("connection",(socket)=>{
    console.log("Websocket connection established")
    socket.on("message",(data)=>{
        const b=Buffer.from(data).toString();
        console.log(b,"data")
        socket.send(`${data}`)
    })
})

