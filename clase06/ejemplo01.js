//en este ejercicio generamos 1000 numeros aleatorios del 1 al 20 y despues contamos cuantos numeros se generaron de cada numero.

const randomNumbers = () => {
    const numbers = [];
    for (let i = 0; i <1000;i++) {
        numbers.push(Math.floor((Math.random() * 20)+1));
    }
    return numbers;
};

const numbers = randomNumbers();

const numbersCount = numbers.reduce((acc, n) =>{
    if(acc[n]){
        acc[n]++;
    } else {
        acc[n] = 1;
    }
    return acc;
}, {});

console.log(numbersCount);

//reduce para sumar todos los valores, como es el numero de numeros que se encuentran
//podemos sumarlos y confirmar que si se crearon los 1000

const total = Object.values(numbersCount).reduce((acc, n) => {
    return acc + n;
})

//reduce siempre debe retornar algo, en el primer caso lo volivmos un diccionario, y en el segundo lo volvimos un numero 
console.log(total);