import { Router } from "express";

const router = Router();

const pets = [
    {
        id: 1,
        name: "Firulais",
        type: "perro",
        age: 3,
        owner: "Juan",
    },
    {
        id: 2,
        name: "Pelusa",
        type: "gato",
        age: 2,
        owner: "Maria",
    },
    {
        id: 3,
        name: "Pulga",
        type: "perro",
        age: 1,
        owner: "Pedro",
    },
    {
        id: 4,
        name: "Luna",
        type: "gato",
        age: 4,
        owner: "Jose",
    },
];

router.get("/",(req,res)=>{
    res.send(pets||[]);
})

router.get("/:id",(req,res)=>{
    const id = req.params.id
    const pet = pets.find((pet) => pet.id === parseInt(id));
    if(!pet){
        res.status(404).send("Pet no encontrada");
    }
    res.send(pet)
})

router.post("/",(req,res)=>{
    const pet = req.body;
    const maxId = pets.reduce((max,pet) => (pet.id>max?pet.id:max),0)
    pet.id = maxId+1;
    pets.push(pet);
    res.status(200).send("Pet agregada correctamente")
})

router.put("/:id",(req,res)=>{
    const id = req.params.id;
    const pet = pets.find((pet) => pet.id === parseInt(id));
    if(!pet){
        res.status(404).send("Mascota no encontrada");
    }
    const petNew = req.body;
    pet.name = petNew.name;
    pet.type = petNew.type;
    pet.age = petNew.age;
    pet.owner = petNew.owner;

    const index = pets.indexOf((pet) => pet.id === parseInt(id));
    pet.id = index;

    pets[index] = pet;
    res.status(200).send("Pet actualizada");
})

router.delete("/:id",(req,res)=>{
    const id = req.params.id
    const pet = pets.find((pet)=> pet.id === parseInt(id))
    if(!pet){
        res.status(404).send("Pet no encontrada")
    }
    const index = pets.indexOf(pet);
    pets.splice(index,1);
    res.status(200).send("Pet eliminada")
})

export default router;