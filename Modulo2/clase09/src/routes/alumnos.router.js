import { Router } from "express";

const router = Router();

const alumnosCoder = [
    {
        name: "felipe",
    },
    {
        name: "federico",
    },
    {
        name: "Romina",
    }
]

router.get("/",(req,res)=>{
    res.send(alumnosCoder||[]);
});

export default router;