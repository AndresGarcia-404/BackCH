import {Router} from "express";
import upload from "../utils.js"
const router = Router();

const users = [
    {
        id: 1,
        name: "Juan",
        lastname: "Perez",
    },
    {
        id: 2,
        name: "Maria",
        lastname: "Gomez",
    },
    {
        id: 3,
        name: "Pedro",
        lastname: "Gomez",
    },
    {
        id: 4,
        name: "Jose",
        lastname: "Perez",
    },
]

router.get("/",(req,res)=>{
    res.send(users||[]);
})

router.get("/:id",(req,res)=>{
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if(!user){
        res.status(404).send("Usuario no encotrado");
    }
    res.status(200).send(user)
})

router.post("/",(req,res)=>{
    const user = req.body;
    /* if(!user.name || !user.lastname){
        res.status(400).send("Faltan datos")
    } */
    user.id = users.length+1;
    upload(req,res, (err) => {
        if(err){
            res.status(500).send("Error al subir archivo")
        }
        user.avatar = req.file.filename;
    })
    users.push(user);
    res.status(200).send("Usuario agregado correctamente")
})

router.put("/:id",(req,res)=>{
    const id = req.params.id;
    const user = users.find((user)=> user.id === parseInt(id));
    if(!user){
        res.status(404).send("Usuario no encontrado")
    }
    user.name = req.body.name;
    user.lastname = req.body.lastname;
    const index = users.indexOf((user) => user.id === parseInt(id));
    user.id = index
    users[index] = user
    res.status(200).send("Usuario actualizado")
})

router.delete("/:id",(req,res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id))
    if(!user){
        res.status(404).send("Usuario no encontrado")
    }
    const index = users.indexOf(user);
    users.splice(index,1);
    res.status(200).send("Usuario eliminado")
})

export default router;