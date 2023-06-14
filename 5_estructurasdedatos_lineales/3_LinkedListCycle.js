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

  appendCycle(value, prevNode) {
    const newNode = new Node(value);
    newNode.prev = this.tail;

    let indexPrevNode = this.searchNode(prevNode);
    this.tail.next = indexPrevNode;
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

  hasCycle(){
    if(!this.head) return false;

    let slow = this.head;
    let fast = this.head.next;

    while (fast && fast.next){
      if(fast === slow){
        return true;
      }
      slow = slow.next;
      fast = fast.next;
    }
    return false;
  }
  
  hasCycle2(){
    if(!this.head) return false;

    let slow = this.head;
    let fast = this.head.next;

    while (slow !== fast){
      if(!fast || !slow){
        return false;
      }
      slow = slow.next;
      fast = fast.next;
    }
    return true;
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
myDoubleLinkedList.appendCycle(4, 2)
console.log(myDoubleLinkedList.hasCycle());
console.log(myDoubleLinkedList.hasCycle2());
// console.log(myDoubleLinkedList.toString()) entra en el ciclo de impresión

/* The code above does the following, explained in English:
1. We create a variable called current and assign it to the head of the linked list.
2. We create a variable called linkedList and assign it to the string value of the head node.
3. We create a while loop that will run as long as there is a next node in the list.
4. Inside of the while loop, we assign current to the next node in the list.
5. Inside of the while loop, we append the value of the next node to the linkedList variable.
6. Outside of the while loop, we return the linkedList variable. */
