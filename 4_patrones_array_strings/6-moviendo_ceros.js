// Mover ceros al final
// Dada la lista de enteros nums, mueve todos los ceros al final de la misma, manteniendo el orden relativo de los elementos no nulos.

// Reto: reordena los valores “in place”, sin hacer una copia de la lista.

//   Ejemplo 1:

// # Entrada:
// nums = [0, 1, 0, 3, 12]
// # Salida:
// [1, 3, 12, 0, 0]

// Ejemplo 2:

// # Entrada:
// nums = [0]
// # Salida:
// [0]


// function cerosToEnd(arr){
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }
//   for (let i = j; i < nums.length; i++) {
//     nums[i] = 0;
//   }
//   return nums;
// }
// // nums = [0, 1, 0, 3, 12];
// nums = [0];
// console.log(cerosToEnd(nums));

function moveZeros(nums) {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
    i++;
  }
  return nums;
}

nums1 = [0, 1, 0, 3, 12];
console.log(moveZeros(nums1))