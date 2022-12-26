import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let users = [
    {
        name: "Juan",
        lastname: "Perez",
        id:1
    },
    {
        name: "Maria",
        lastname: "Gomez",
        id:2
    },
    {
        name: "Pedro",
        lastname: "Gomez",
        id:3
    },
    {
        name: "Jose",
        lastname: "Perez",
        id:4
    }
];

app.get("/api/users", (req, res) => {
    res.send(users || []);
});

app.post("/api/users", (req, res) => {
    const user = req.body;
    if (!user.name || !user.lastname) {
        res.status(400).send("Faltan datos");
    }

    user.id = users.length + 1;
    users.push(user);
    res.status(200).send("Usuario creado");
})

app.put("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const user = req.body;
    console.log(user);

    if (!user.name||!user.lastname) {
        res.status(400).send("Faltan datos")
    }
    const index = users.findIndex((user)=> user.id === id);
    if (index === -1){
        res.status(404).send("Usuario no encontrado");
    }
    user.id = id;
    users[index] = user;
    res.status(200).send("Usuario actualizado");
});

app.delete("/api/users/:id",(req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex((user)=> user.id === id);
    if (index === -1){
        res.status(404).send("Usuario no encontrado");
    }
    users.slice(index,1);
    res.status(200).send("Usuario eliminado")
});

app.listen(port,()=>{
    console.log(`Iniciando en http://localhost: ${port}`);
})