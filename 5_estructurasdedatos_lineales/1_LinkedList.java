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