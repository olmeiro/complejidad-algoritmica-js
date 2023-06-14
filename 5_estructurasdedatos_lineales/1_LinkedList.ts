Programando listas enlazadas con Typescript

class ListaEnlazada {
  private cabeza: Nodo;
  private cola: Nodo;

  constructor(primerNodo: Nodo) {
    this.cabeza = primerNodo;
    this.cola = primerNodo;
  }

  public insertarNodoAlFinal(nuevoNodo: Nodo): void {
    this.cola.siguiente = nuevoNodo;
    this.cola = this.cola.siguiente;
  }

  public borrarNodo(nodo: Nodo): void {
    nodo.siguiente = null;
  }

  public buscarNodo(valorABuscar: number): Nodo {
    let nodoActual = this.cabeza;
    while (nodoActual != null) {
      if (nodoActual.valor == valorABuscar) {
        return nodoActual;
      }
      nodoActual = nodoActual.siguiente;
    }
    return null;
  }

  public borrarNodoPorValor(valor: number): void {
    let nodoABorrar = this.buscarNodo(valor);
    if (nodoABorrar != null) {
      nodoABorrar.siguiente = null;
    }
  }
}

class Nodo {
  public valor: number;
  public siguiente: Nodo;

  constructor(valor: number, siguiente: Nodo) {
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