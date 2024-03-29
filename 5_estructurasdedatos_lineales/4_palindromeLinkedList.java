// Programando Palindrome Linked List con Java

public class Main {
  public static void main(String[] args) {
    // Tu código aquí
  }

  public class Nodo {
    int valor;
    Nodo siguiente;

    Nodo() {}

    Nodo(int valor) {
      this.valor = valor;
    }

    Nodo(int valor, Nodo siguiente) {
      this.valor = valor;
      this.siguiente = siguiente;
    }
  }

  public boolean isPalindrome(Nodo cabeza) {
    if (cabeza == null) {
      return true;
    }
    Nodo finPrimeraMitad = encontrarMitad(cabeza);
    Nodo comienzoSegundaMitad = reversarLista(cabeza);
    boolean esPalindromo = true;
    Nodo p1 = cabeza;
    Nodo p2 = comienzoSegundaMitad;

    while (esPalindromo == true && p2 != null) {
      if (p1.valor != p2.valor) {
        esPalindromo = false;
      }
      p1 = p1.siguiente;
      p2 = p2.siguiente;
    }
    finPrimeraMitad.siguiente = reversarLista(comienzoSegundaMitad); //volvemos a la lista original.
    return esPalindromo;
  };

  public Nodo encontrarMitad(Nodo cabeza) {
    Nodo rapido = cabeza;
    Nodo lento = cabeza;
    while (rapido.siguiente != null && rapido.siguiente.siguiente != null) {
      rapido = rapido.siguiente.siguiente;
      lento = lento.siguiente;
    }
    return lento;
  };

  public Nodo reversarLista(Nodo cabeza) {
    Nodo anterior = null;
    Nodo actual = cabeza;
    while (actual != null) {
      Nodo siguienteTemporal = actual.siguiente;
      actual.siguiente = anterior;
      anterior = actual;
      actual = siguienteTemporal;
    }
    return actual;
  }

}