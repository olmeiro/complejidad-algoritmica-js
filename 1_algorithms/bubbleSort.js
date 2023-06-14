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

/* This is an example for calling this function:*/
var arreglo = [1, 5, 2, 10, 3, 4, 6];
var arregloOrdenado = bubbleSort(arreglo);
console.log(arregloOrdenado); 

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

/* Here is the explanation for the code above:
1. First of all, we declare a variable called 'longitud' and assign it the value of the length of the array, this is O(1) because it will always be the same.
2. We enter the first for loop, which will iterate the array and will run n times, where n is the size of the array, this is O(n).
3. We enter the second for loop, which will also run n times, where n is the size of the array, this is O(n).
4. In the second for loop we have a conditional, which will be O(1) because it will always be the same.
5. Inside that conditional we have three lines of code, which are O(1) because they will always be executed the same number of times.
6. Finally, we return the array, which is O(1) because it will always be the same.
7. The final complexity is O(n^2) because we have a nested loop. */
