let miArreglo = [0,1,2,3,4,5,6,7,8,9];

//como funciona la funcion map de los arreglos
const miFuncionMap = (arreglo,callback) => {
    let nuevoArreglo = [];
    for (let i =0;i<arreglo.length;i++){
        nuevoArreglo.push(callback(arreglo[i]));
    }
    return nuevoArreglo;
}

const funCallback = (elemento) => elemento * 2;

let nuevoArreglo = miFuncionMap(miArreglo,funCallback);
/* console.log(nuevoArreglo); */

//muestra de hacerlo directo con la funcion map 

let otroNuevoArreglo = miArreglo.map(funCallback);
/* console.log(otroNuevoArreglo); */

//uso del prototype, aqui basicamente podemos definir nuesvos helpers

Array.prototype.miMap = function (callback) {
    let nuevoArreglo = [];
    for (let i =0;i<this.length;i++){
        nuevoArreglo.push(callback(this[i]));
    }
    return nuevoArreglo;
}

//pruebas del nuevo helper creado
let arregloPrueba = [1,2,3,4,5];
console.log(arregloPrueba.miMap((elemento) => elemento * 2 ));
console.log(arregloPrueba.miMap(funCallback));