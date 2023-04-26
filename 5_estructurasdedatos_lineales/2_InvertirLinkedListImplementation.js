//Estructura para crear una singlyLinkedList ->
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
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

  // prepend(value) { //agrega elemento al princicipio
  //   const newNode = new Node(value);

  //   newNode.next = this.head;
  //   this.head = newNode;
  //   this.length++;

  //   return this;
  // }

  // //Nodos intermedios:debemos manejar el garbage-collector para evitar que nodos desaparezcan:
  // insert(index, value) {
  //   if (index >= this.length) { //cuando no hay suficientes elementos, agregamos el nodo al final:
  //     return this.append(value);
  //   }

  //   if (index === 0) {
  //     return this.prepend(value);
  //   }

  //   const newNode = new Node(value); // Nodo nuevo
  //   const firstPointer = this.getTheIndex(index - 1); //Nodo anterior al index
  //   const holdingPointer = firstPointer.next; //Nodo que queda colgando

  //   firstPointer.next = newNode; //Nodo anterior en next ahora es el nuevo nodo
  //   newNode.next = holdingPointer; //next de newNode ahora es el nodo que esta colgango (sin apuntador)

  //   this.length++;
  // }

  // getTheIndex(index) {//searchNode
  //   let counter = 0;
  //   let currentNode = this.head;

  //   while (counter !== index) {
  //     currentNode = currentNode.next;
  //     counter++;
  //   }

  //   return currentNode;
  // }

  // remove(index) {
  //   let currentNode = this.head;
  //   const firstPointer = this.getTheIndex(index - 1); //Nodo anterior al index

  //   for (let i = 0; i < this.length; i++) {
  //     if (i < index) {
  //       currentNode = currentNode.next;

  //     }
  //   }

  //   const holdingPointer = currentNode.next;
  //   firstPointer.next = holdingPointer;
  //   this.append(currentNode.value)
  //   console.log("result", this.toString()); //1 -> 2 -> 6 -> 3 -> 4 -> null

  // }

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

  oddEventList() {
    if (this.head == null || this.head.next == null) {
      return head;
    }

    let odd = this.head;
    let even = this.head.next;
    let headEven = even;

    while (even != null && even.next != null) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }

    odd.next = headEven;
    return this.head;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
console.log(myLinkedList.toString())

myLinkedList.oddEventList()
console.log(myLinkedList.toString())
