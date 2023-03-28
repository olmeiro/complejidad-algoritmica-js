// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;

// const nums2 = [2, 5, 6];
// const n = 3;

const nums1 = [1, 2, 3, 0, 0, 0, 0];
const m = 3;

const nums2 = [-4, 2, 3, 9];
const n = 4;

// const nums1 = [2,4,6,0,0,0,0];
// const m = 3;

// const nums2= [3,5,7,9];
// const n = 4;

function mergeTwoSortedList(nums1, nums2, m, n) {
  let p1 = m - 1; //3
  let p2 = n - 1; //4
  let pn = m + n - 1; //6

  for (let i = pn; i >= 0; i--) {//0,0,0,0,3,2,1
    let num1 = nums1[p1]
    let num2 = nums2[p2]

    if (num1 === num2 || num1 > num2) {
      nums1[i] = num1
      p1--;
    }

    if (num1 < num2) {
      nums1[i] = num2
      p2--;
    }
    pn--
  }
  
  //cuando nums1 y nums2 tienen longitudes diferentes
  for (i = 0; i < p2 + 1; i++) {
    nums1[i] = nums2[i]
  }

  return nums1;
}
console.log(mergeTwoSortedList(nums1, nums2, m, n));

