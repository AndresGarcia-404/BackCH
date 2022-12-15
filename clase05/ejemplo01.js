let miAarreglo = [0,1,2,3,4,5,6,7,8,9];

let nuevoArreglo = miAarreglo.map((elemeto) => elemeto + 1);
let nuevoArreglo2 = miAarreglo.map((elemeto) => elemeto * 2);
let nuevoArreglo3 = miAarreglo.map((elemeto) => elemeto * elemeto);
let nuevoArreglo4 = miAarreglo.map((elemeto) => "a"); 

const funcionCallback = (elemto) => {
    if (elemto%2 === 0) {
        return elemto;
    } else {
        return "no es par";
    }
};

//asi se haria normalmente
/* let nuevoArregloConArrowFunc = miAarreglo.map(dato =>{
    if (dato%2 === 0) {
        return dato;
    } else {
        return "no es par";
    }
}) */

//aqui ya hacemos uso del callback donde se recibe la funcion como parametro
let nuevoArreglo5 = miAarreglo.map(funcionCallback);

console.log(nuevoArregloConArrowFunc);
console.log(nuevoArreglo5);