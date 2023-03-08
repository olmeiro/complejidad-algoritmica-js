/**
 * Complejidad Temporal -> O(5n) -> O(n)
 * Complejidad Espacial ->
 * Espacio Auxiliar ->
 */

function complejidad_lineal2() {
  let calculo = 0;

  for (let i = 0; i < array.length; i++) { //O(n)
    for (let j = 0; j < array.length; j++) { //O(5)
      calculo += i * j;
    }
  }
  return calculo;
}
