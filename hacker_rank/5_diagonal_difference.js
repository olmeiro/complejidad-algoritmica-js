// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left - to - right diagonal = .The right to left diagonal = .Their absolute difference is.

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix.
// Each of the next  lines describes a row, , and consists of  space - separated integers.

//   Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 - 12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
// 5
//   - 12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

// 4
// 5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: | 4 - 19 | = 15

// Note: | x | is the absolute value of x
function diagonalDifference(arr) {
  // Write your code here
  let firstDiagonal = [];
  let secondDiagonal = [];

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      if(row === col){
        firstDiagonal.push(arr[row][col]);
      }
    }
  }
 
  let row = 0;
  while(row < arr.length){
    let col = arr.length -1 - row;
    // console.log("row-col:", {row, col})
    secondDiagonal.push(arr[row][col]);
    row++;
  }

  // console.log(firstDiagonal) [ 1, 5, 9 ]
  // console.log(secondDiagonal) [ 3, 5, 9 ]

  //Sumar cada array y restar primero del segundo:
  let totalFirstArr = firstDiagonal.reduce((a,b) => a + b)
  let totalSecondArr = secondDiagonal.reduce((a,b) => a + b)

  // console.log("totalArr: ", {totalFirstArr, totalSecondArr})
  let totalAbs = totalFirstArr - totalSecondArr
  return Math.abs(totalAbs);
}

const arrayDiagonal = [
  [1,2,3],
  [4,5,6],
  [9,8,9]
]

let prueba = diagonalDifference(arrayDiagonal);
console.log(prueba);