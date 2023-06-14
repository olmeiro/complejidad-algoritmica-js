/**
 * Complejidad Temporal -> O( 1 + n * n + 1*(8) ) -> O(n^2 + 9) -> O(n^2)
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> Complejidad espacial - datos de entrada = O(n) - O(5) = O(1)
 */

//Complejidad Temporal
function selectionSort(arreglo) {
  let longitud = arreglo.length; //O(1)

  for (let i = 0; i < longitud; i++) { //O(n)
    let minimo = i; //O(1)
    for (let j = i + 1; j < longitud; j++) { //O(n)
      if (arreglo[j] < arreglo[minimo]) { //O(1)
        minimo = j; //O(1)
      }
    }
    if (minimo != i) { //O(1)
      let temporal = arreglo[i]; //O(1)
      arreglo[i] = arreglo[minimo]; //O(1)
      arreglo[minimo] = temporal; //O(1)
    }
  }
  return arreglo; //O(1)
}

//Complejidad Espacial: O(n + 5) -> O(n)
function selectionSort(arreglo) { //O(n)
  let longitud = arreglo.length; //O(1)

  for (let i = 0; i < longitud; i++) { //O(1) 
    let minimo = i; //O(1)
    for (let j = i + 1; j < longitud; j++) { //O(1) 
      if (arreglo[j] < arreglo[minimo]) { //no crea espacio
        minimo = j;
      }
    }
    if (minimo != i) {
      let temporal = arreglo[i]; //O(1)
      arreglo[i] = arreglo[minimo];
      arreglo[minimo] = temporal;
    }
  }
  return arreglo;
}


/* Here is the explanation for the code above:
1. Create a function called selectionSort that receives an array as parameter.
2. Declare a variable called longitud that will store the length of the array received as parameter.
3. Create a for loop that will iterate until the last element of the array.
4. Create a variable called minimo that will store the index of the element with the minimum value.
5. Create a for loop that will iterate from the next element of the current element of the first for loop until the last element of the array.
6. Create an if statement that will compare the value of the current element with the value of the element with the minimum value.
7. If the value of the current element is less than the value of the element with the minimum value, then update the value of the variable minimo.
8. Create an if statement that will check if the value of the variable minimo is different from the value of the variable i.
9. If the value of the variable minimo is different from the value of the variable i, then swap the values of the current element and the element with the minimum value.
10. Return the array sorted in ascending order. */

/* This is an example for calling this function:*/
let arreglo = [5, 6, 1, 3, 2, 4];
console.log(selectionSort(arreglo)); 