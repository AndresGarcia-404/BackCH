//este es el operador nullish, cuando un valor es nulo pone por defecto un valor que ya este establecido , muy similar al operador ternario

const miTexto = null ?? "default string";
console.log(miTexto);

const miNumero = 0 ?? 42;
const miNumero2 = null ?? 42;

console.log(miNumero);
console.log(miNumero2);

//escrito con forma ternaria

const miTextTern = null ? null : "default string";
console.log(miTextTern);

const miNumeroTern = 0 ? 0 : 42;
console.log(miNumeroTern);