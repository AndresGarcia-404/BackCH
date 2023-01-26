import { Router } from "express";
import { userModel } from "../models/user.model.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        let users = await userModel.find();
        res.send(users.length > 0 ? users : {error: "No hay usuarios", users: users})
    } catch (err) {
        res.status(500).send(err.message)
    }
});

router.get('/:email', async (req, res) => {
    const {email} = req.params;
    try {
        let users = await userModel.find({email: email});
        res.send(users.length > 0 ? users : {error: "No hay coincidencia", users: users})
    } catch (err) {
        res.status(500).send(err.message)
    }
});

router.post('/', async (req, res) => {
    const {nombre,apellido,email} = req.body;
    const newUser = {
        nombre,
        apellido,
        email
    }
    try {
        const result =  await userModel.create(newUser);
        res.send({status: "success", payload: result});
    } catch (err) {
        res.status(500).send(err.message)
    }
});

router.delete('/:email', async (req, res) => {
    const {email} = req.params
    try{
        const result = await userModel.deleteOne({email:email})
        res.send({status: "success", payload: result});
    } catch(err){
        res.status(500).send(err.message)
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {nombre,apellido,email} = req.body
    const newUser = {
        nombre,
        apellido,
        email
    }
    try {
        const result = await userModel.updateOne({email:id}, newUser);
        res.send({status:"succes",payload:result})
    } catch (error) {
        res.status(500).send(err.message)
    }
})

export default router;