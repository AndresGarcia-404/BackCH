class Persona {
    constructor(name,apellido,edad){
        this.nombre = name;
        this.apellido =apellido;
        this.edad = edad;
    }

    static especie(){
        return "humamo"
    }

    get nombreCompleto() {
        return this.nombre+ " "+this.apellido;
    }

    saludar() {
        console.log(
            `hola, me llamo ${this.nombreCompleto} y tengo ${this.edad} anios y soy ${Persona.especie()}`
        );
    }
}

const persona1 = new Persona("juan","perez",30);
console.log(persona1.nombreCompleto);
console.log(persona1);
console.log(persona1.saludar());