/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( 1 )
 * Espacio Auxiliar -> O(1) - 01 : O(1)
 */

//Complejidad Temporal: O(n) + O(1): O(n)
function factorial(numero) {
  let resultado = 1; //O(1)

  for (let i = 2; i <= numero; i += 1) { //O(n)
    resultado *= i; //O(1)
  }

  return resultado; //O(1)
}

//Complejidad espacial: O(1+1) -> O(1)
function factorial(numero) { //O(1)
  let resultado = 1; //O(1)

  for (let i = 2; i <= numero; i += 1) { //O(1)
    resultado *= i;
  }

  return resultado;
}
