//importaciones de la capa de negocio
import {getDatos, postDatos} from '../negocio/index.js';

async function getDatosController(req, res) {
    try {
        const datos = await getDatos();
        res.status(200).json(datos);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function postDatosController(req, res) {
    try {
        const datos = await postDatos(req.body);
        res.status(200).json(datos);
    } catch (error) {
        res.status(500).json(error);
    }
}

export {getDatosController, postDatosController};