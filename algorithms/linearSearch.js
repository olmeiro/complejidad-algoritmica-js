/**
 * Complejidad Temporal -> O( n + 3 ) -> O(n)
 * Complejidad Espacial -> O( n + 1 )
 * Espacio Auxiliar -> Complejidad espacial - datos de entrada = O(n) - O(1) = O(1) 
 */

//complejidad temporal
function linearSearch(arreglo, clave) {
  for (let indice = 0; indice < arreglo.length; indice++) { // O(n) 
    if (arreglo[indice] === clave) { //O(1)
      return indice; //O(1)
    }
  }
  return -1; //O(1)
}

//complejidad espacial
function linearSearch(arreglo, clave) { //O(n) -> por el arreglo la clave es O(1)
  for (let indice = 0; indice < arreglo.length; indice++) { // O(1) 
    if (arreglo[indice] === clave) { //no crea espacio en memoria
      return indice;
    }
  }
  return -1;
}
