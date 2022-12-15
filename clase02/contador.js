class Contador{

    constructor(){
        this.contador = 0;
    }
    incrementar(){
        this.contador++;
    }
    decrementar(){
        this.contador--;
    }
    getContador(){
        return this.contador;
    }
}

const contador1 = new Contador();
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
console.log(contador1.getContador());
contador1.decrementar();
contador1.decrementar();
contador1.decrementar();
console.log(contador1.getContador());
