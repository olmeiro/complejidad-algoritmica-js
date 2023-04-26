// Vas a recibir la cabeza de una lista unidireccional.La lista no tiene valores repetidos(en esto último el ejercicio varía un poco de las clases anteriores).

// La lista enlazada se puede representar de la siguiente forma:

// L0 -> L1 -> L2 -> ... -> Ln - 2 -> Ln - 1 -> Ln

// Debes reordenar la lista enlazada para que tenga la siguiente forma:

// L0 -> Ln -> L1 -> Ln - 1 -> L2 -> Ln - 2 -> ...

// No debes modificar los valores de los nodos de la lista, solo el orden de los nodos en la lista(es decir, las relaciones entre nodos).

//   Ejemplo 1:

// // Input (1->2->3)
// const nodo1 = new Nodo(1);
// const nodo2 = new Nodo(2);
// const nodo3 = new Nodo(3);
// nodo1.siguiente = nodo2;
// nodo2.siguiente = nodo3;

// // Output
// reorderList(nodo1) // 1->3->2

// Ejemplo 2:

// // Input (1->2->3->4)
// const nodo1 = new Nodo(1);
// const nodo2 = new Nodo(2);
// const nodo3 = new Nodo(3);
// const nodo4 = new Nodo(4);
// nodo1.siguiente = nodo2;
// nodo2.siguiente = nodo3;
// nodo3.siguiente = nodo4;

// // Output
// reorderList(nodo1) // 1->4->2->3

class Node {
  constructor(value) {
    this.value = (value === undefined ? 0 : value);
    this.next = (this.next === undefined ? null : this.next)
  }
}

function Nodo(valor, siguiente) {
  this.valor = (valor === undefined ? 0 : valor)
  this.siguiente = (siguiente === undefined ? null : siguiente)
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;
    this.length = 1; //por default tenemos un nodo
  }

  append(value) { //agregar elementos al final, nueva cola
    const newNode = new Node(value);

    this.tail.next = newNode; //generamos un new NODE  al final
    this.tail = newNode; //posicionamos el new Node en la cola
    this.length++;

    return this;
  }

  toString() {
    let current = this.head
    let linkedList = `${[current.value]} -> `

    while (current.next) {
      current = current.next
      linkedList += `${[current.value]} -> `
    }

    linkedList += 'null'

    return linkedList
  }

  reorderList () {
    if (!this.head || !this.head.next) return this.head;

    // Paso 1: encontrar el nodo medio
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Paso 2: cortar la lista en dos partes
    let head2 = slow.next;
    slow.next = null;

    // Paso 3: invertir la segunda mitad de la lista
    let prev = null;
    let curr = head2;
    while (curr) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    head2 = prev;

    // Paso 4: intercalar los elementos de ambas mitades
    let p1 = this.head;
    let p2 = head2;
    while (p2) {
      let temp1 = p1.next;
      let temp2 = p2.next;

      p1.next = p2;
      p2.next = temp1;

      p1 = temp1;
      p2 = temp2;
    }
  }
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(6);
myLinkedList.append(3);
myLinkedList.append(5);
myLinkedList.append(4);
myLinkedList.append(7);
console.log(myLinkedList.toString())

myLinkedList.reorderList()
console.log(myLinkedList.toString())
