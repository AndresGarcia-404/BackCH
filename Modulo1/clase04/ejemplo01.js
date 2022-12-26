/* const miFuncionSincrona = () => {
    console.log("uno");
    console.log("dos");
    console.log("tres");
    console.log("cuatro");
    console.log(5);
    console.log(6);
};

miFuncionSincrona(); */


//ejemplo de programacion asincrona en este caso el ejemplo hace uso del setTimeout
const miFuncionAsincrona = () => {
    const temporizador = (callback) => 
    setTimeout(() => {
        callback();
    },5000);

    const miCallback = () => {
        console.log("dos");
        console.log("tres");
        console.log("cuatro");
    };
    
    console.log("cero");
    console.log("uno");
    temporizador(miCallback);
    console.log(5);
    console.log(6);
    console.log(7);

};

miFuncionAsincrona();