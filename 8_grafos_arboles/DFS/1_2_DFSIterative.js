const graphAdj = {
  1: [2, 3],
  2: [4, 5],
  3: [6, 7],
  4: [],
  5: [],
  6: [],
  7: []
};

const dfs = (node, value) => {
  let stack = [];
  let visited = new Array(Object.keys(graphAdj).length).fill(false);

  stack.push(node);
  while (stack.length > 0) {
    node = stack.pop();
    if (visited[node] === false) {
      visited[node] = true;
      if (node === value) {
        return true;
      }
      for (let j = 0; j < graphAdj[node].length; j++) {
        if (graphAdj[node][j] === value) {
          return true;
        }
        if (graphAdj[node].includes(value)) {
          stack.push(graphAdj[node][j]);
        }
      }
    }
  }
  return false;
};

// Llama a la función dfs con el nodo inicial 1 y el valor buscado de 2
console.log(dfs(1, 2));