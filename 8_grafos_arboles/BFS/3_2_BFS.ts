function BFS(raiz: Nodo) {
    if (!raiz) {
        return [];
    }
    const respuesta = [raiz];
    const cola = [raiz];
    let nivel = 1;
    while (cola.length) {
        for (let _ = 0; _ < cola.length; _++) {
            const nodoActual = cola.shift();
            console.log(nodoActual.valor);
            respuesta.push(nodoActual);
            for (const hija of nodoActual.hijos) {
                cola.push(hija);
            }
        }
        nivel += 1;
    }
    console.log("la cantidad de niveles de este arbol es:", nivel);
    return respuesta;
}


class Nodo {
    valor: number;
    hijos: Nodo[];
    constructor(valor: number = null, hijos: Nodo[] = null) {
        this.valor = valor;
        this.hijos = hijos || [];
    }
}

Ejemplo de uso
const nodo1 = new Nodo(1);
const nodo2 = new Nodo(2);
const nodo3 = new Nodo(3);
const nodo4 = new Nodo(4);
const nodo5 = new Nodo(5);

nodo1.hijos = [nodo2, nodo3];
nodo2.hijos = [nodo4];
nodo3.hijos = [nodo5];

BFS(nodo1);