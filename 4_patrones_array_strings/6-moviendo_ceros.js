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

/* Here is the explanation for the code above:
1. We keep two pointers i and j, where i is the slow-runner while j is the fast-runner.

2. As long as nums[j] = 0, we increment j to skip all the zeros.

3. When we encounter a non-zero element nums[j], we swap nums[i] and nums[j], then increment i so that now nums[i] = 0.

4. We repeat the process until j reaches the end of array nums. */