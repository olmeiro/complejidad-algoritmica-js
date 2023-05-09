function isValid(s) {
  let stack = [];
  for (let c of s) {
    if (c === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    } else if (c === '(') {
      stack.push('(');
    }
  }
  return stack.length === 0;
}