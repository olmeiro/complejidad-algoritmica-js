// Programando Reorder List con JavaScript
// sea la lista : 1 -> 2 -> 3 -> 4 -> 5 -> 6
//resultado: 1 -> 6 -> 2 -> 5 -> 3 -> 4

// function Nodo(valor, siguiente) {
//   this.valor = (valor === undefined ? 0 : valor)
//   this.siguiente = (siguiente === undefined ? null : siguiente)
// }

// var reorderList = function (cabeza) {
//   if (!cabeza || !cabeza.siguiente || !cabeza.siguiente.siguiente) return cabeza;
//   let rapido = cabeza.siguiente;
//   let lento = cabeza;
//   while (rapido && rapido.siguiente) {
//     rapido = rapido.siguiente.siguiente;
//     lento = lento.siguiente;
//   }
//   const comienzoSegundaMitad = lento.siguiente;
//   let actual = comienzoSegundaMitad;
//   let anterior = null;
//   let tmp;
//   while (actual) {
//     tmp = actual.siguiente;
//     actual.siguiente = anterior;
//     anterior = actual;
//     actual = tmp;
//   }
//   let p1 = cabeza;
//   let p2 = anterior;
//   while (p2) {
//     tmp = p1.siguiente;
//     p1.siguiente = p2;
//     p1.siguiente.siguiente = tmp;
//     p2 = p2.siguiente;
//     p1 = tmp;
//   }
// }

//Estructura para crear una singlyLinkedList ->
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
    //conteo de elementos:
    this.length = 1; //por default tenemos un nodo
  }

  //methods:
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

  findMiddle(head) {
    let fast = head
    let slow = head

    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }

  invertirLinkedList(list) {
    const copy = JSON.parse(JSON.stringify(list))

    let prevNode = null;
    let currentNode = copy;
    let nextNode = null;

    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return prevNode;
  }

  reorderList () {

    if (!this.head || !this.head.next || !this.head.next.next) return this.head;
    //dos apuntadores para encontrar la mitad
    let rapido = this.head.next;
    let lento = this.head;
    
    while (rapido && rapido.next) {
      rapido = rapido.next.next;
      lento = lento.next; //termina en la mitad
    }
    const comienzoSegundaMitad = lento.next; //4
    let actual = comienzoSegundaMitad;
    let anterior = null;
    let tmp;
    while (actual) { //invertimos segunda mitad
      tmp = actual.next;
      actual.next = anterior;
      anterior = actual;
      actual = tmp;
    }
    let p1 = this.head;
    let p2 = anterior;

    while (p2) {
      tmp = p1.next;
      p1.next = p2;
      p1 = p1.next;
      p2 = p2.next;
      p1.next = tmp;
      p1 = p1.next;
    }
    if (p1) {
      p1.next = null;
    }
  }
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
console.log(myLinkedList.toString())

myLinkedList.reorderList()
console.log(myLinkedList.toString())
