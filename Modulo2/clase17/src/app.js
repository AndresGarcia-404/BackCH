import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from "dotenv"
import { orderModel } from './models/order.model.js';
import { studentModel } from './models/estudiantes.model.js';
import * as CONSTANTS from "./constants.js"
dotenv.config();

const PORT = process.env.PORT || 8080;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hola")
})

const randomNumerFromArray = (array) => {
    return Math.floor(Math.random() * array.length);
}

app.listen(PORT, ()=>{
    console.log('server listening on port '+PORT);
})

const enviroment = async () => {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@codercluster.u9omn6q.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)  

    //ejemplo de agregation (aqui las guarda todas en individualmente)
    /* let orders = await orderModel.aggregate([
        {
            $match: {size: "mediana"}
        },
        {
            $group: {_id:"$name",totalQuantity:{$sum:"$quantity"}}
        },
        {
            $sort: {totalQuantity:-1}
        },
        {
            $merge: "reports"
        }
    ]);
    console.log(orders); */

    //uso de otros stage (aqui las guarda en un arreglo)
    /* let order = await orderModel.aggregate([
        {
            $match: {size: "grande"}
        },
        {
            $group: {_id:"$name",totalQuantity:{$sum:"$quantity"}}
        },
        {
            $group: {_id:1,orders:{$push:"$$ROOT"}}
        },
        {
            $project: {
                _id: 0,
                orders:"$orders"
            }
        },
        {
            $merge: "reports"
        }
    ]);
    console.log(order); */
    
    //creamos 30 estudiantes
    /* const groups = ["A", "B", "C", "D", "E", "F","G","H","I","J"]
    const genders = ["M","F"]
    let students = []
    for (let x = 0; x<=30;x++){
        let name = CONSTANTS.names[randomNumerFromArray(CONSTANTS.names)]
        let lastname = CONSTANTS.lastNames[randomNumerFromArray(CONSTANTS.lastNames)]
        let email = `${name.toLowerCase()}.${lastname.toLowerCase()}@gmail.com`
        let gender = genders[randomNumerFromArray(genders)];
        let grade = Math.floor(Math.random()*10);
        let group = groups[randomNumerFromArray(groups)]

        let student = {first_name:name,last_name:lastname,email,gender,grade,group}
        students.push(student)
    }
    let result = await studentModel.insertMany(students)
    console.log(result); */

    //orden de los eestudiantes por calificacion de mejor a peor (tambien por grupo)
    /* let tbest = await studentModel.aggregate([
        {           //si cambiomos por grade ya acumula por nota
            $group: { _id: "$group", totalQuantity: {$sum: 1}}
        },
        {
            $sort: {totalQuantity: 1}
        }
    ]) */

    //promedio de todos los grupos y para saber cuantos tienen uno individual
    /*let promA = await studentModel.aggregate([
        {
            $match: {group:"A"}
        }, 
        {
            $group: {_id: "$group",promedio: {$avg: "$grade"}}
        }
    ])
    console.log(promA);
    */
    
    //saber cuantos hombres y cuantas mujeres hay (ordenamiento combinado)
    /* let groupsS = await studentModel.aggregate([
        {
            $group: {
                _id: {group: "$group", gender: "$gender"},
                totalQuantity: {$sum:1}
            }
        },
        {
            $sort: {_id:1}
        }
    ]);
    console.log(groupsS); */

    //promedio por hombre y mujer en cada grupo 
    /* let promedios = await studentModel.aggregate([
        {
            $group: {
                _id: {group: "$group", gender: "$gender"},
                avgGtade: {$avg:"$grade"}
            }
        },
        {
            $sort: {_id:1}
        }
    ]);
    console.log(promedios); */

    //! uso de paginate                 el page indica en que pagina queremos estar situados
    let users = await studentModel.paginate({gender: "M"}, {page:4,limit:5})
    console.log(users);
}



enviroment();