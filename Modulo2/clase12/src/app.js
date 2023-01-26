import express from 'express';
import mongoose from 'mongoose';
import userRouter from "./routes/user.routes.js";
import studentRouter from "./routes/student.routes.js";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/users",userRouter);
app.use("/students",studentRouter);

app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.listen(PORT,() => {
    console.log(`app listening on port ${PORT}`);
});

mongoose.connect("mongodb+srv://felipe:12321@codercluster.u9omn6q.mongodb.net/colegio?retryWrites=true&w=majority", (error)=>{
    if(error){
        console.log("Error connecting");
        process.exit();
    }else{
        console.log("Conectado a la DB :)");
    }
})