import express from 'express';
/* import cookieParser from "cookie-parser"; */
import petsRouter from "./routes/pets.router.js";
import usersRouter from "./routes/user.router.js";
import alumnosRouter from "./routes/alumnos.router.js";
import cookieParser from 'cookie-parser';

const app = express();
/* const cookieParser = cookieParser(); */
const port = 3000;

/* app.use(express.json()); */
/* app.use(cookieParser); */
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.use("/api/pets", petsRouter);
app.use("/api/user", usersRouter);
app.use("/api/alumnos", alumnosRouter);

app.listen(port,()=>{
    console.log(`Iniciando en http://localhost:${port}`);
})