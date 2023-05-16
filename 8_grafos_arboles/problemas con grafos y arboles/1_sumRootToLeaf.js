class Nodo {
  constructor(x){
    this.value = x;
    this.left = null;
    this.right = null;
  }
}

function sum_numbers(root,start_number_with='') {
  if(root.left === null && root.right === null){
    return parseInt(start_number_with + root.value);
  }

  let left = 0;
  let right = 0;

  if(root.left !== null){
    left = sum_numbers(root.left,start_number_with + root.value.toString());
  }
  if(root.right !== null){
    right = sum_numbers(root.right,start_number_with + root.value.toString());
  }

  return left + right;
}

// Crear el árbol binario
let nodo1 = new Nodo(1);
let nodo2 = new Nodo(2);
let nodo3 = new Nodo(3);
let nodo4 = new Nodo(4);
let nodo5 = new Nodo(5);
let nodo6 = new Nodo(6);
let nodo7 = new Nodo(7);

nodo1.left = nodo2;
nodo1.right = nodo3;
nodo2.left = nodo4;
nodo2.right = nodo5;
nodo3.left = nodo6;
nodo3.right = nodo7;

console.log(sum_numbers(nodo1));