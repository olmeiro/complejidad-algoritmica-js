const root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
};

const dfs = (node, value) => {
  let stack = [];
  let visited = new Array(8).fill(false);

  stack.push(node);
  while (stack.length > 0) {
    node = stack.pop();
    if (visited[node.value] === false) {
      visited[node.value] = true;
      if (node.value === value) {
        return true;
      }
      if (node.left !== null) {
        stack.push(node.left);
      }
      if (node.right !== null) {
        stack.push(node.right);
      }
    }
  }
  return false;
};

console.log(dfs(root, 2));
console.log(dfs(root, 7));
console.log(dfs(root, 8));

/* Here is the explanation for the code above:
1. Create an empty stack
2. Create an array to keep track of visited node
3. Push the root node into the stack
4. Pop the top item from the stack
5. If the node has not been visited, mark it as visited
6. If the node is the node we're looking for, return true
7. If the node has right child, push it to the stack
8. If the node has left child, push it to the stack
9. Repeat steps 4-8 until the stack is empty
10. Return false */