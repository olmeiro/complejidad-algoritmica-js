function permute(numeros) {
  let dfs = function (listaNumeros, combinaciónActual, permutaciones) {
    if (!listaNumeros.length) {
      permutaciones.push(combinaciónActual); //append the permutation to the list of permutations
    }
    for (let i = 0; i < listaNumeros.length; i++) {
      dfs(listaNumeros.slice(0, i).concat(listaNumeros.slice(i + 1)), combinaciónActual.concat(listaNumeros[i]), permutaciones); //recursive call
    }
  }
  let permutaciones = [];
  dfs(numeros, [], permutaciones);
  return permutaciones;
}

/* This is an example for calling this function: */
let exercise = permute([1, 2, 3]);
console.log(exercise);