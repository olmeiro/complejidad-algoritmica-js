// Given an array of integers, where all elements but one occur twice, find the unique element.

//   Example

// The unique element is.

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space - separated integers that describe the values in .

//   Constraints

// It is guaranteed that  is an odd number and that there is one unique element.
// , where.

function lonelyinteger(a) {
  // Write your code here
  let len = a.length - 1
  const counters = {};
  let answer;

  if(len === 0) {
    answer = a[0]
  }

  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= len; j++) {
      if (i !== j && a[i] === a[j]){
        let count = 0;
        counters[a[i]] = ++count;
      } else if (i !== j && a[i] !== a[j]){
        if (counters.hasOwnProperty(a[i])){
          continue
        }else{
          counters[a[i]] = 0
        }
      }
    }
  }
  for (const [key, value] of Object.entries(counters)) {
    if(value === 0){
      answer = key
    }
  }
  console.log(answer)
}

let a = [1];
console.log(lonelyinteger(a))
let b = [1,1,2];
console.log(lonelyinteger(b))
let c = [1,2,3,4,3,2,1];
console.log(lonelyinteger(c))
let d = [0,0,1,2,1];
console.log(lonelyinteger(d))