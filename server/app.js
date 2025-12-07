import express from "express";
import {Server} from "socket.io";
const app=express();

const httpServer=app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})


const io=new Server(httpServer,{
    cors:{
        origin:"*"
    }
})

io.on("connection",(socket)=>{
    console.log("Websocket connection established",socket.id)

    //Only to the current user
    socket.emit("message",`Welcome to the room ${socket.id.substring(0,5)}`)

    //To all users except the current user
    socket.broadcast.emit("message",`A new user has joined the room :${socket.id.substring(0,5)}`)

    //To all users including the current user
    socket.on("disconnect",()=>{
        socket.broadcast.emit("message",`User disconnected: ${socket.id}`)
    })

    //User activity tracker

    socket.on("activity",(name)=>{
        socket.broadcast.emit("activity",`${name}`)
    })

    socket.on("message",(data)=>{
        io.emit("message",`${socket.id.substring(0,5)} : ${data}`)
    })
})

