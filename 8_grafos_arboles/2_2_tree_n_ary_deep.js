class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.hijos = [];
  }
}

// Crear el árbol n-ario
let raiz = new Nodo(1);
raiz.hijos.push(new Nodo(2));
raiz.hijos.push(new Nodo(3));
raiz.hijos[0].hijos.push(new Nodo(4));
raiz.hijos[0].hijos.push(new Nodo(5));
raiz.hijos[1].hijos.push(new Nodo(7));
raiz.hijos[1].hijos.push(new Nodo(8));
raiz.hijos[1].hijos[0].hijos.push(new Nodo(9));
raiz.hijos[1].hijos[0].hijos[0].hijos.push(new Nodo(10));

function profundidad(raiz) {
  if (!raiz) {
    return 0;
  }
  let max_profundidad = 0;
  for (let hijo of raiz.hijos) {
    max_profundidad = Math.max(max_profundidad, profundidad(hijo));
  }
  return max_profundidad + 1;
}

// Ejecutar la función profundidad
console.log("La profundidad del árbol es:", profundidad(raiz));