import express from 'express';
const app = express();

const usuarios = [
    {
        id:1,
        nombre: 'user 1',
        apellido: 'apellido 1',
        edad: 21,
        email: 'email1@demo.com'
    },
    {
        id:2,
        nombre: 'user 2',
        apellido: 'apellido 2',
        edad: 22,
        email: 'email2@demo.com'
    },
    {
        id:3,
        nombre: 'user 3',
        apellido: 'apellido 3',
        edad: 23,
        email: 'email3@demo.com'
    }
];

app.get("/usuarios",(req,res)=>{
    res.json(usuarios);
});

app.get("/usuarios/:id",(req,res)=>{
    const usuario = usuarios.find((u) => u.id == req.params.id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({error:"usuario no encontrado"})
    }
});

app.listen(8080,()=>{
    console.log("servidor en puerto 8080");
});