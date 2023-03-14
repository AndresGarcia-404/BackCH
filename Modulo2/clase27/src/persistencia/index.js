//importaciones mongoose models
const datos = [];

async function recuperarTodos(){
    return datos;
}

async function guardarDatos(dato){
    datos.push(dato);
}

export {recuperarTodos, guardarDatos};