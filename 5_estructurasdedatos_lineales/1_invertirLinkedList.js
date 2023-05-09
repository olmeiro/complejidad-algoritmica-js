const head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function invertirLinkedList(head) {
  let prevNode = null;
  let currentNode = head;
  let nextNode = null;

  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode;
}

const newHead = invertirLinkedList(head);
console.log("HEAD",head)
console.log("NEWHEAD",newHead)