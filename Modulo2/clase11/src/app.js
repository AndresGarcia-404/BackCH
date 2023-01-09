import express from 'express';
import {Server} from "socket.io";
import {engine} from "express-handlebars";
import viewsRoute from "./routes/views.router.js";

const app = express();
const PORT = 8080;

const messages = []
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

const httpServer =  app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
    console.log("Iniciado con socket.io")
});

const socketServer = new Server(httpServer);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.static("public"));

app.get('/', (req,res)=> {
    res.send('hello world')
})

app.post('/socketMessage',(req,res)=> {
    const {message} = req.body;
    socketServer.emit("message",message)
    res.send("ok")
})

app.use("/views",viewsRoute);

socketServer.on("connection",(socket) => {
    console.log('Nuevo cliente Conetado!');
    socket.emit("message","Bienvenido al servidor!")
    socket.on("new-message",(data)=>{
        console.log(data);
        messages.push(data);
        socketServer.emit("messages",messages)
    })
})
