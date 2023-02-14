import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT =3000;

app.use(cookieParser("Es un secreto"));

app.get('/', (req, res) => {
    res.send('Hola Mundo');
})

app.get("/setCookie", (req, res) => {
    res.cookie("CoderCookie","Esta es una cookie de coderHouse",{maxAge: 10000}).send("Cookie creada");
})

app.get('/setSignedCookie', (req, res) => {
    res.cookie("signedCookie","Esta es una cookie Firmada",{ signed: true}).send("Cookie firmada creada");
});

app.get("/readCookie", (req, res) => {
    //para leer una cookie solo tenemos que poner . y el nombre de la cookie
    res.send(req.cookies);
})

app.get("/readSignedCookie", (req, res) => {
    res.send(req.signedCookies);
});

app.get("/deleteCookie", (req, res) => {
    res.clearCookie("CoderCookie");
    res.send("Cookie eliminada");
})

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})