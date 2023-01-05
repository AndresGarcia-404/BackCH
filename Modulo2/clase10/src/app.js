import {engine} from "express-handlebars";
import express from "express";
import viewsRoute from "../routes/view.router.js";

const app = express();

app.engine("handlebars",engine());
app.set('view engine', 'handlebars');
app.set('views',"./views");

app.use(express.static("public"));

app.use("/views", viewsRoute);

app.get("/formulario",(req,res) => {
    let testUser = {
        title: "Este es un formulario",
        message: "Gola gracias por registrarte!",
        name: "Jose"
    };
    res.render("form",testUser);
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
})