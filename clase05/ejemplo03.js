const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const potencia = (a,b) => a ** b;
const modulo = (a,b) => a % b;

const calcular = (a,b,callback) => {
    let resultado = callback(a,b);
    // con callback.name encontramos el nombre de la funcion asociada
    console.log(`el resultado de la operacion: ${callback.name}.  es: ${resultado}`);
}

calcular(2,5,sumar);
calcular(2,5,restar);
calcular(2,5,multiply);
calcular(2,5,divide);
calcular(2,5,potencia);
calcular(2,5,modulo);