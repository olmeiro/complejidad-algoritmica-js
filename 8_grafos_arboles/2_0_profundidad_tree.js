class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

function profundidad(raiz) {
  if (!raiz) {
    return 0;
  }
  let izquierda = profundidad(raiz.izquierda);
  let derecha = profundidad(raiz.derecha);
  if (!izquierda) {
    return derecha + 1;
  } else if (!derecha) {
    return izquierda + 1;
  } else {
    return Math.max(izquierda, derecha) + 1;
  }
}

// Crear el árbol binario
let raiz = new Nodo(1);
raiz.izquierda = new Nodo(2);
raiz.derecha = new Nodo(3);
raiz.izquierda.izquierda = new Nodo(4);
raiz.izquierda.derecha = new Nodo(5);
raiz.derecha.izquierda = new Nodo(7);
raiz.derecha.derecha = new Nodo(8);
raiz.derecha.izquierda.izquierda = new Nodo(9);
raiz.derecha.izquierda.izquierda.izquierda = new Nodo(10);

// Ejecutar la función profundidad
console.log("La profundidad del árbol es:", profundidad(raiz));