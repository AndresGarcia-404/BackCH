//ecmascript 8 uso de object.keys
const pais = {
    nombre: 'Colombia',
    capital: 'Bogota',
    poblacion: 45000000,
    idioma: 'Espaniol',
    moneda: 'peso colombiano'
}

/* console.log(`pais: ${pais.nombre} capital: ${pais.capital} poblacion: ${pais.poblacion}`); */

//object entries devuelve un array de arrays con los pares clase-valor
console.log(Object.entries(pais));

/* console.log(pais['nombre']);
console.log(pais['nombre']=='Colombia'); */

//object.keys devuelve un array con las keys del objeto

console.log(Object.keys(pais));  