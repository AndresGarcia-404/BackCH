const objetos = [
    {
        manzanas: 3,
        peras: 2,
        uvas: 0,
        leche: 4,
        pan: 2
    },
    {
        manzanas: 1,
        carne: 1,
        uvas: 5,
        carne: 8,
        pan: 10
    }
];
//obetener los tipos de producto
//object.values retorn los valores en forma de arreglo
let tienda1 = Object.keys(objetos[0]);
let tienda2 = Object.keys(objetos[1]);
let valorT1 = Object.values(objetos[0]);
let valorT2 = Object.values(objetos[1]);

//en cual tienda puedo encontrar carne
console.log(tienda1.includes("carne"));
console.log(tienda2.includes("carne"));

let totalt1 = 0;
let totalt2 = 0;

valorT1.forEach((valor) => {
    totalt1 += valor
});
valorT2.forEach((valor) => {
    totalt2 += valor
});

console.log(totalt1);
console.log(totalt2);