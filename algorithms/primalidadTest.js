/**
 * Complejidad Temporal -> O(1)
 * Complejidad Espacial -> O(1)
 * Espacio Auxiliar -> O(1)
 */

//Complejidad temporal: O(1)
function primalidadTest(numero) {

  if (numero <= 3) { //O(1)
    return true;//O(1)
  }

  if (numero % 1 !== 0) { //O(1)
    return false; //O(1)
  }

  if (numero <= 1) {//O(1)
    return false;//O(1)
  }

  if (numero % 2 === 0) {//O(1)
    return false;//O(1)
  }

  const limiteDivisor = Math.sqrt(numero); //O(1) variable?
  for (let divisor = 3; divisor <= limiteDivisor; divisor += 2) { //O(1)
    if (numero % divisor === 0) { //O(1)
      return false; //O(1)
    }
  }

  return true; //O(1)
}

//Complejidad espacial: O(1)
function primalidadTest(numero) {

  if (numero <= 3) {
    return true;
  }

  if (numero % 1 !== 0) {
    return false;
  }

  if (numero <= 1) {
    return false;
  }

  if (numero % 2 === 0) {
    return false;
  }

  const limiteDivisor = Math.sqrt(numero); //O(1)
  for (let divisor = 3; divisor <= limiteDivisor; divisor += 2) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}
