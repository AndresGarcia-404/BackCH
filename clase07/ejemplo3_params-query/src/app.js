import express from 'express';
const app = express();

//ejemplo de ruta con parametro
app.get("/saludo/:nombre", (req, res) =>{
    res.send(`hola ${req.params.nombre}!`);
})
//ejemplo de ruta con parametro opcional
app.get("/saludopcional/:nombre?", (req, res) =>{
    if (req.params.nombre) {
        res.send(`Hola ${req.params.nombre}!`)
    } else {
        res.send('Hola!')
    }
});

//ejemplo con dos parametros apellido y nombre.
app.get("/saludo/:apellido/:nombre",(req,res)=>{
    res.send(`hola ${req.params.nombre} ${req.params.apellido}!`)
});

//--------------------------------------------------

app.get("/saludoquery", (req, res)=> {
    //tambien podemos hacer un destructuring de la siguiente manera
    //const {nombre, apellido, edad} = req.query
    if (req.query) {
        res.send(`hola ${req.query.nombre} ${req.query.apellido}! \ntu edad es: ${req.query.edad}\ntu nacionalidad es: ${req.query.nacionalidad}`);
    } else {
        res.send('hola!');
    }
});

app.listen(8080,() => {
    console.log('servidor on port 8080');
});