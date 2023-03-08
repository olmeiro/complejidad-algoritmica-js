/**
 * Complejidad Temporal  -> O(1 + n * n +1+1+1+1+1) -> O( n^2 + 6  ) -> O(n^2)
 * Complejidad Espacial -> O( n + 4  ) -> O(n)
 * Espacio Auxiliar -> Complejidad espacial - datos de entrada = O(n) - O(1) -> O(1)
 */

//Complejidad Temporal
function bubbleSort(arreglo) {
  let longitud = arreglo.length;  //O(1)
  for (let i = 0; i < longitud; i++) { //O(n)
    for (let j = 0; j < longitud; j++) { //O(n)
      if (arreglo[j] > arreglo[j + 1]) { //O(1)
        let temporal = arreglo[j]; //O(1)
        arreglo[j] = arreglo[j + 1]; //O(1)
        arreglo[j + 1] = temporal; //O(1)
      }
    }
  }
  return arreglo; //O(1)
}

//Complejidad Espacial
function bubbleSort(arreglo) { //O(n)
  let longitud = arreglo.length;  //O(1)
  for (let i = 0; i < longitud; i++) { //O(1)
    for (let j = 0; j < longitud; j++) { //O(1)
      if (arreglo[j] > arreglo[j + 1]) {  //no crea más espacio
        let temporal = arreglo[j]; //O(1)
        arreglo[j] = arreglo[j + 1]; //no crea más espacio
        arreglo[j + 1] = temporal; //no crea más espacio
      }
    }
  }
  return arreglo;
}
