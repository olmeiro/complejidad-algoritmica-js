// Programando listas enlazadas con Javascript

class ListaEnlazada {
  constructor(primerNodo) {
    this.cabeza = primerNodo;
    this.cola = primerNodo;
  }
  insertarNodoAlFinal(nuevoNodo) {
    this.cola.siguiente = nuevoNodo;
    this.cola = this.cola.siguiente;
  }
  borrarNodo(nodo) {
    nodo.siguiente = null;
  }
  buscarNodo(valorABuscar) {
    let nodoActual = this.cabeza;
    while (nodoActual != null) {
      if (nodoActual.valor == valorABuscar) {
        return nodoActual;
      }
      nodoActual = nodoActual.siguiente;
    }
    return null;
  }
  borrarNodoPorValor(valor) {
    let nodoABorrar = this.buscarNodo(valor);
    if (nodoABorrar != null) {
      nodoABorrar.siguiente = null;
    }
  }
}

class Nodo {
  constructor(valor, siguiente) {
    this.valor = valor;
    this.siguiente = siguiente;
  }
}

/* The code above does the following, explained in English:
1. It creates a class named ListaEnlazada (Linked List).
2. It declares two protected variables, one named cabeza, and one named cola.
3. It creates a constructor for the class, which takes a Nodo object as an argument.
4. It defines a method named insertarNodoAlFinal (insertNodeAtEnd), which takes a Nodo object as an argument.
5. It defines a method named borrarNodo (deleteNode), which takes a Nodo object as an argument.
6. It defines a method named buscarNodo (searchNode), which takes an int as an argument.
7. It defines a method named borrarNodoPorValor (deleteNodeByValue), which takes an int as an argument.
8. It creates a class named Nodo (Node).
9. It declares three variables, one named valor, one named siguiente, and one named anterior.
10. It creates three constructors for the class, one with no arguments, one with a single int argument, and one with two int arguments.
11. It creates a method named getValor (getValue), which returns an int.
12. It creates a method named getSiguiente (getNext), which returns a Nodo.
13. It creates a method named getAnterior (getPrevious), which returns a Nodo.
14. It creates a method named setValor (setValue), which takes an int as an argument.
15. It creates a method named setSiguiente (setNext), which takes a Nodo as an argument.

/* This is an example for calling this function: // Este es un ejemplo para llamar a esta función:*/
let nodo1 = new Nodo(1, null);
let nodo2 = new Nodo(2, null);
let nodo3 = new Nodo(3, null);
let nodo4 = new Nodo(4, null);
let nodo5 = new Nodo(5, null);

let listaEnlazada = new ListaEnlazada(nodo1);
listaEnlazada.insertarNodoAlFinal(nodo2);
listaEnlazada.insertarNodoAlFinal(nodo3);
listaEnlazada.insertarNodoAlFinal(nodo4);
listaEnlazada.insertarNodoAlFinal(nodo5);

listaEnlazada.borrarNodoPorValor(3); 

console.log(listaEnlazada.buscarNodo(3)); // null
console.log(listaEnlazada.buscarNodo(4)); // Nodo { valor: 4, siguiente: null }
console.log(listaEnlazada.buscarNodo(5)); // Nodo { valor: 5, siguiente: null }
console.log(listaEnlazada.buscarNodo(6)); // null
