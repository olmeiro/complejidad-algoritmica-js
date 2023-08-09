// 5. Cuadrados de un arreglo ordenado
// Dado un arreglo de números enteros ordenados en orden ascendente, devuelve una matriz de los cuadrados de cada número ordenados en orden no decreciente.

//   Ejemplo 1:

// # Entrada:
// nums = [-4, -1, 0, 3, 10]
// # Salida:
// [0, 1, 9, 16, 100]

// # Explicación: Después de elevar al cuadrado, el arreglo se convierte en[16, 1, 0, 9, 100].
// # Después de ordenar, se convierte en[0, 1, 9, 16, 100].
//   Ejemplo 2:

// # Entrada:
// nums = [-7, -3, 2, 3, 11]
// # Salida:
// [4, 9, 9, 49, 121]

function squareSort(nums){
  const a = nums.map(num => num * num);

  // return a.sort((a,b) => a - b)
  //bubble Sort:
  let longitud = a.length;  //O(1)
  for (let i = 0; i < longitud; i++) { //O(n)
    for (let j = 0; j < longitud; j++) { //O(n)
      if (a[j] > a[j + 1]) { //O(1)
        let temporal = a[j]; //O(1)
        a[j] = a[j + 1]; //O(1)
        a[j + 1] = temporal; //O(1)
      }
    }
  }
  return a; //O(1)
  
}

function squareSortOption(nums){
  let p1 = 0;
  let p2 = nums.length - 1;
  respuesta = new Array(nums.length).fill(0);
  p_respuesta = nums.length - 1;

  while (p_respuesta >= 0){
    if(Math.abs(nums[p1]) > Math.abs(nums[p2])){
      respuesta[p_respuesta] = nums[p1] ** 2;
      p1++;
      p_respuesta--;
    } else {
      respuesta[p_respuesta] = nums[p2] ** 2;
      p2--;
      p_respuesta--;
    }
  }
  return respuesta;
}

const numeros = [-4, -1, 0, 3, 10];
// console.log(squareSort(numeros))
const nums = [-7, -3, 2, 3, 11]
// console.log(squareSort(nums))
console.log(squareSortOption(nums))