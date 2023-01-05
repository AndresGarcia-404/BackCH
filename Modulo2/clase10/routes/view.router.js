import express from 'express';
import utils from "../src/utils.js";

const router = express.Router();

router.get('/',(req,res)=>{
    const users = utils.users;
    const role = true;
    const myUser = {
        title: " Este es el titulo",
        users: users,
        role: role,
        style: "style.css"
    };
    console.log("Desde el servidor");
    res.render("admin",myUser);
});

export default router;