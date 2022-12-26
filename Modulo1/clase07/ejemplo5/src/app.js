import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true}));

const usuarios = [
    {
        id:1,
        nombre: 'user 1',
        apellido: 'apellido 1',
        edad: 21,
        email: 'email1@demo.com',
        genero: 'masculino'
    },
    {
        id:2,
        nombre: 'user 2',
        apellido: 'apellido 2',
        edad: 22,
        email: 'email2@demo.com',
        genero: 'femenino'
    },
    {
        id:3,
        nombre: 'user 3',
        apellido: 'apellido 3',
        edad: 23,
        email: 'email3@demo.com',
        genero: 'masculino'
    },
    {
        id:4,
        nombre: 'user 4',
        apellido: 'apellido 4',
        edad: 24,
        email: 'email4@demo.com',
        genero: 'femenino'
    },
    {
        id:5,
        nombre: 'user 5',
        apellido: 'apellido 5',
        edad: 25,
        email: 'email5@demo.com',
        genero: 'masculino'
    },
    {
        id:6,
        nombre: 'user 6',
        apellido: 'apellido 6',
        edad: 26,
        email: 'email6@demo.com',
        genero: 'femenino'
    }
];

//filtro por genero con query

app.get("/usuarios",(req,res)=>{
    const genero = req.query.genero;
    if(genero && (genero == "masculino" || genero == "femenino")){
        const usuariosFiltrados = usuarios.filter((u) => u.genero == genero);
        res.json(
            usuariosFiltrados.length > 0 ? usuariosFiltados: "No hay usuarios"
        );
    } else if (genero) {
        res.json("Genero invalido");
    } else {
        res.json(usuarios);
    }
})


app.listen(8080,() => {
    console.log("app listening on port 8080");
})