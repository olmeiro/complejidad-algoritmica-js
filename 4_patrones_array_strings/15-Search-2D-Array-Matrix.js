/**
 * T: O(log(m*n)) | S: O(1)
 */

// function searchMatrix(matrix: number[][], target: number): boolean {
//   const m = matrix.length;
//   const n = matrix[0].length;
//   let start = 0;
//   let end = m * n;

//   while (start < end) {
//     const mid = Math.floor((start + end) / 2);
//     const row = Math.floor(mid / n);
//     const col = mid % n;

//     if (matrix[row][col] === target) {
//       return true;
//     }

//     if (matrix[row][col] < target) {
//       start = mid + 1;
//     } else {
//       end = mid;
//     }
//   }

//   return false;
// }

function searchInMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let row = 0;
  let col = n - 1;

  while (row < m && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
}

const matriz = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
console.log(matriz);

let response = searchInMatrix(matriz, 3);
console.log(response);

let response2 = searchInMatrix(matriz, 12);
console.log(response2);
