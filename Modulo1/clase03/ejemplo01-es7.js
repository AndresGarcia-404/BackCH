//desde el exmascript7 se agrego la funcion exponencial
// la funcion map recorre todo el arreglo, permite usar el indice
let valores = [1,2,3,4,5];
//let nuevosValores = valores.map((valor,indice) =>valor**indice);
let nuevosValores = valores.map((valor) =>valor**2);
console.log(nuevosValores);

//uso de array includes (retorna un true o un false)
let nombres = [
    "juan",
    "pedro",
    "maria",
    "luis"
];

let nombre = "luis";
let nombre2 = "luisa";

const buscaNombre = (nombre) =>{
    return nombres.includes(nombre);
}

function handleBuscarNombre(nombre){
    if (buscaNombre(nombre)== true){
        console.log(`el nombre ${nombre} se encuentra en el array`);
    }else{
        console.log(`el nombre ${nombre} no se encuentra en el array`);
    }
}

handleBuscarNombre(nombre);
handleBuscarNombre(nombre2);