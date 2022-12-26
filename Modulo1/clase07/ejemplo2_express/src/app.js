import express from "express";
const app = express();

app.get("/saludo", (req, res) => {
    res.send("<h1 style='color:blue'>Saludo desde Express!! </h1>");
});

app.get("/", (req, res) => {
    res.send("esta es la raiz");
});

app.get("/despedida", (req, res) => {
    res.send("Adios!!!");
});

app.listen(8080,() => {
    console.log('servidor on port 8080');
});