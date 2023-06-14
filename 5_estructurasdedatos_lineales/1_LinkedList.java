// Programando listas enlazadas con Java

class ListaEnlazada{
    protected Nodo cabeza;
    protected Nodo cola;
    public ListaEnlazada(Nodo primerNodo){
        cabeza = primerNodo;
        cola = primerNodo;
    }
    public void insertarNodoAlFinal(Nodo nuevoNodo){
        cola.siguiente = nuevoNodo;
        cola = cola.siguiente;
    }
    public void borrarNodo(Nodo nodo){
        nodo.siguiente = null;
    }
    public Nodo buscarNodo(int valorABuscar){
        Nodo nodoActual = cabeza;
        while (nodoActual != null) {
            if (nodoActual.valor == valorABuscar){
                return nodoActual;
            }
            nodoActual = nodoActual.siguiente;
        }
        return null;
    }
    public void borrarNodoPorValor(int valor){
        Nodo nodoABorrar = buscarNodo(valor);
        if (nodoABorrar != null) {
            nodoABorrar.siguiente = null;
        }
    }

    public class Nodo {
        int valor;
        Nodo siguiente;
        Nodo() {}
        Nodo(int valor) { this.valor = valor; }
        Nodo(int valor, Nodo siguiente) { this.valor = valor; this.siguiente = siguiente;  }
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
16. It creates a method named setAnterior (setPrevious), which takes a Nodo as an argument. */