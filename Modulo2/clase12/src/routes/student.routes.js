import { Router } from "express";
import { studentModel } from "../models/student.model.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        let students = await studentModel.find();
        res.send(students.length > 0 ? students : {error: "No hay estudiantes", students: students})
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.post('/', async (req, res) => {
    const {data} = req.body;
    try {
        const result = await studentModel.insertMany(data);
        res.send({status:"succes",payload:result})
    } catch (error) {
        res.status(500).send(error.message);
    }
})

export default router;