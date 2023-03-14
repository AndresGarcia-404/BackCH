import express from 'express';
import cors from 'cors';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({message: "Saludos"});
});

app.listen(8080, () => {
    console.log("http://localhost:8080");
});