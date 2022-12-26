//en es9 se agrego el spread operator que son los ... esto implica crear una copia del objeto u arreglo
let arreglo1 =['Marta','Maria','Juan']
let arreglo2 =['Pedro','Jose','Diego']

let arreglo3 = [...arreglo1,...arreglo2]
console.log(arreglo3);
 
arreglo4 = [arreglo1,arreglo2]
console.log(arreglo4.flat());

