// Código
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  prepend(value) { // agrega elemento al princicipio
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) { //cuando no hay suficientes elementos, agregamos el nodo al final:
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value); // Nodo nuevo
    const firstPointer = this.searchNode(index - 1); //Nodo anterior al index
    const holdingPointer = firstPointer.next; //Nodo que queda colgando

    firstPointer.next = newNode; //Nodo anterior en next ahora es el nuevo nodo
    newNode.prev = firstPointer;
    newNode.next = holdingPointer; //next de newNode ahora es el nodo que esta colgango (sin apuntador)
    holdingPointer.prev = newNode;

    this.length++;
  }

  searchNode(index) {//searchNode
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    if (index >= this.length) {
      console.error("index is out of limits of the array");
    } else if (index == 0) { //borrar el primero
      this.head = this.head.next;
      this.head.prev = null;
      this.length--
    }

    else if (index === this.length - 1) {//borrar el último
      const firstPointer = this.searchNode(index - 1);
      firstPointer.next = null;

      this.tail = firstPointer;
      this.length--;
    } else {//borrar en el medio
      const firstPointer = this.searchNode(index - 1);
      const pointerToRemove = firstPointer.next;
      firstPointer.next = pointerToRemove.next;

      const nextToPointerToRemove = pointerToRemove.next;
      nextToPointerToRemove.prev = firstPointer;
      firstPointer.next = nextToPointerToRemove;

      this.length--;
    }
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
}

let myDoubleLinkedList = new MyDoubleLinkedList(1);
myDoubleLinkedList.append(2)
myDoubleLinkedList.append(3)
myDoubleLinkedList.append(4)
myDoubleLinkedList.append(5)
console.log(myDoubleLinkedList.toString())

myDoubleLinkedList.oddEventList()
console.log(myDoubleLinkedList.toString())

/* The code above does the following, explained in English:
1. If the head is null or the head.next is null, return the head;
2. Initialize odd as head and even as head.next. The reason for this is that the odd pointer will point to the odd nodes while the even pointer will point to the even nodes.
3. Initialize headEven as even. This will be used to connect the odd nodes to the even nodes later.
4. While even is not null and even.next is not null, keep looping.
5. Assign odd.next to even.next. This will connect the odd nodes together.
6. Assign odd to odd.next. This will move the odd pointer forward.
7. Assign even.next to odd.next. This will connect the even nodes together.
8. Assign even to even.next. This will move the even pointer forward.
9. Connect odd to headEven. This will connect the odd nodes to the even nodes.
10. Return head. */