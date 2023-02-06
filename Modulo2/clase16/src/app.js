import express from "express";
import mongoose from "mongoose";
import Loader from "./loader.js";
import { userModel } from "./models/users.model.js";
import { studentModel } from "./models/students.model.js";
import { courseModel } from "./models/courses.model.js";
import * as dotenv from "dotenv"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});

server.on('error',(error)=>{
    console.log("Error en el servidor:",error);
})

const enviroment = async () => {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@codercluster.u9omn6q.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)

        //aqui le agregamos cursos a un estudiante
        /* let student  = await studentModel.findOne({_id: "63dc8494c7d096402cd38141"})
        student.courses.push({course:"63dc8bcb5d9d6bf5c97fe897"})
        console.log(student)
        let result = await studentModel.findByIdAndUpdate("63dc8494c7d096402cd38141",student);
        console.log(result); */
        
        //uso de populate para ver la data
        let student = await studentModel.findById("63dc8494c7d096402cd38141").populate('courses.course')
        console.log(JSON.stringify(student,null,'\t'));
}

enviroment();