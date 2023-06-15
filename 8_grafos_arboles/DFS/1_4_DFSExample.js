/* DFS: Depth First Search - Búsqueda en profundidad */

/* DFS boolean true or false */
const dfsb = function (root, target) {
  if (!root) return false;
  if (root.value === target) return true;
  return dfsb(root.left, target) || dfsb(root.right, target);
}

/* DFS node or null */
const dfsn = function (root, target) {
  if (!root) return null;
  if (root.value === target) return root;
  return dfsn(root.left, target) || dfsn(root.right, target);
}

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
}

console.log(dfsn(root, 5)); // { value: 5, left: null, right: null }
console.log(dfsn(root, 8)); // null

console.log(dfsb(root, 5, true)); // true
console.log(dfsb(root, 8, true)); // false