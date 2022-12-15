let mylist = ["pera","manzana","fresa"];
let mylist2 = []

const mostrarLista = (list) => {
    if (list.length === 0) {
        console.log("La lista esta vacia.");
    } else {
    list.forEach(valor => console.log(valor));
    let textolongitud = `la lista tiene: ${list.length} elementos.`;
    console.log(textolongitud);
    }
}

mostrarLista(mylist);
mostrarLista(mylist2);