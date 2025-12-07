const http=require("http");
const {Server}=require("socket.io")

const httpserver=http.createServer()

httpserver.listen(3000,()=>console.log("Http server started"))
// const wsServer= new ws.WebSocketServer({port:3000});
const io=new Server(httpserver,{
    cors:{
        origin:"*"
    }
})

io.on("connection",(socket)=>{
    console.log("Websocket connection established",socket.id)
    socket.on("message",(data)=>{
        io.emit("message",`${socket.id.substring(0,5)} : ${data}`)
    })
})

