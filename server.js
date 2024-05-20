import express from 'express';
import {createServer} from "http";
import { Server } from 'socket.io';
import dotenv from "dotenv"

dotenv.config({
    path:".env"
})


const app=express();
const server=createServer(app);

const io=new Server(server,{
    cors:{
        origin:"*"
    }
});

io.on('connection',(socket)=>{
    // console.log("a user Connected");

    socket.on("chat",(payload)=>{
        // console.log(payload)
        io.emit("chat",payload);
    })
    
})

server.listen(process.env.PORT,()=>{
    console.log(`Chat app listening at port ${process.env.PORT}`);
})
