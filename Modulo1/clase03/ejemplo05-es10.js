//en es10 se agrego el metodo trim para cadenas de caracteres lo cual permite quitar espacios al inicio y al final
let cadena = "           hola mundo,          esta es una cadena         de           texto    "
console.log(cadena.trim());
//esto sirve para cuando la cadena tiene espacios en una zona que no sea al inici o alfinal
console.log(cadena.replace(/ +/g," "));

//el flat deja un arreglo lineal de los arreglos de arreglos

let arreglo1 = [[1,2,3],[4,5,6]];

console.log(arreglo1.flat());
