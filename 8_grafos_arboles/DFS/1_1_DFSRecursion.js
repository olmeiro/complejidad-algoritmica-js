
const dfs = function (start, target) {
  console.log("Visiting Node " + start.value);
  console.log("TREE::::", start)
  if (start.value === target) {
    console.log("Found the node we're looking for!");
    return start;
  }

  //we supposed we have a binary tree:
  // let left = dfs(start.left, target);
  // let right = dfs(start.right, target);
  // if (left != null) {
  //   return left;
  // }
  // if (right != null) {
  //   return right;
  // }

  //having n-childs nodes:
  for (var i = 0; i < start.children.length; i++) {
    var result = dfs(start.children[i], target);
    if (result != null) {
      return result;
    }
  }
  return null;
};

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// Crear un árbol
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);
const child4 = new Node(5);
const child5 = new Node(6);
const child6 = new Node(7);

root.children.push(child1);
root.children.push(child2);
child1.children.push(child3);
child1.children.push(child4);
child2.children.push(child5);
child2.children.push(child6);

// Llamar a la función dfsIter
// console.log(dfs(root, 4));

console.log(dfs(root, 1)); //Found the node we're looking for! ...node...
console.log(dfs(root, 5)); // { value: 5, left: null, right: null }
console.log(dfs(root, 8)); // null
