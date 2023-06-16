function letterCasePermutation(S) {
  let res = []
  function dfs(permutacionActual, apuntador) {
    if (apuntador == S.length) {
      res.push(permutacionActual.join(''));
      return;
    }
    for (let i of new Set([S[apuntador].toLowerCase(), S[apuntador].toUpperCase()])) {
      permutacionActual.push(i);
      dfs(permutacionActual, apuntador + 1);
      permutacionActual.pop();
    }
  }
  dfs([], 0);
  return res;
}

/* This is an example for calling this function: */
exercise = letterCasePermutation("a1b2");
console.log(exercise); //["a1b2", "a1B2", "A1b2", "A1B2"]