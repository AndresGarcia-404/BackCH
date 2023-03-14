//importaciones de persistencia
import {recuperarTodos, guardarDatos} from '../persistencia/index.js';

async function getDatos() {
    const datos = await recuperarTodos();
    return datos;
}

async function postDatos(datos) {
    datos.added = Date.now();
    await guardarDatos(datos);
    return datos;
}

export {getDatos, postDatos};