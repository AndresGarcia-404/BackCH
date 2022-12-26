const dividir = (dividendo,divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor===0){
            reject('No se puede dividir por 0')
        }
        resolve(dividendo/divisor);
    });
};

//asi es como se ve una promesa, su resultado con el .then y con el .catch
/* 
dividir(10,5).then((resultado) => console.log(resultado)).catch((err) => console.log("error: ", err));
dividir(10,0).then((resultado) => console.log(resultado)).catch((err) => console.log("error: ", err)); 
*/


//asi funciona una funcion asincronica
const dividirAsync = async (dividendo,divisor) => {
    try {
        let resultado = await dividir(dividendo,divisor);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

dividirAsync(10,5);
dividirAsync(10,0);