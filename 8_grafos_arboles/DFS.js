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