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

function merge_lists(nums1, m, nums2, n) {
  let i = nums1.length - 1;
  let p1 = m - 1;
  let p2 = n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
    i--;
  }

  for (i = 0; i < p2 + 1; i++) {
    nums1[i] = nums2[i];
  }

  return nums1;
}
console.log(merge_lists(nums1, m, nums2, n));
