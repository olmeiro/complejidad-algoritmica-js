/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];
  dfs(new Array(n).fill(-1), 0, [], res); // numeros [ -1, -1, -1, -1 ], apuntador, construccionActual, res
  return res;
};

function dfs(numeros, apuntador, construccionActual, res) {
  if (apuntador == numeros.length) { // si el apuntador es igual a la longitud de numeros
    res.push(construccionActual); // agrega la construccion actual a res
    return;
  }
  for (let i = 0; i < numeros.length; i++) {
    numeros[apuntador] = i; // numeros [ 0, -1, -1, -1 ]
    if (valid(numeros, apuntador)) {
      let tmp = ".".repeat(numeros.length); // tmp = "...."
      dfs(numeros, apuntador + 1, construccionActual.concat([tmp.slice(0, i) + "Q" + tmp.slice(i + 1)]), res); // construccionActual.concat([tmp.slice(0, i) + "Q" + tmp.slice(i + 1)]) = [ 'Q...' ]
    }
  }
}

function valid(numeros, apuntador) { //this function checks if the current position is valid
  for (let i = 0; i < apuntador; i++) {
    if (Math.abs(numeros[i] - numeros[apuntador]) == apuntador - i || numeros[i] == numeros[apuntador]) { //this checks if the current position is valid, if it is not, it returns false
      return false;
    }
  }
  return true;
}

/** This is an example for calling this function: */
let n = 4;
let exercise = solveNQueens(n);
console.log(exercise);