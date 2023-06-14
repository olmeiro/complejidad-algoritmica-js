function BFS(raiz) {
  if (!raiz) {
    return [];
  }
  let respuesta = [raiz];
  let cola = [raiz];
  let nivel = 1;
  while (cola.length > 0) {
    for (let _ = 0; _ < cola.length; _++) {
      let nodoActual = cola.shift();
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
  constructor(valor, hijos) {
    this.valor = valor;
    this.hijos = hijos || [];
  }
}
// Ejemplo de uso
let nodo1 = new Nodo(1);
let nodo2 = new Nodo(2);
let nodo3 = new Nodo(3);
let nodo4 = new Nodo(4);
let nodo5 = new Nodo(5);
nodo1.hijos = [nodo2, nodo3];
nodo2.hijos = [nodo4];
nodo3.hijos = [nodo5];
BFS(nodo1);