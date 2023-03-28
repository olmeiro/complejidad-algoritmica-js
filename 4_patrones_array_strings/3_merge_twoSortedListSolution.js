// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;

// const nums2 = [2, 5, 6];
// const n = 3;

const nums1 = [1, 2, 3, 0, 0, 0,0];
const m = 3;

const nums2 = [-4,2,3,9];
const n = 4;

// const nums1 = [2,4,6,0,0,0,0];
// const m = 3;

// const nums2= [3,5,7,9];
// const n = 4;

//T: O(n+m) = O(n) lineal 
//S: O(1)
function mergeTwoSortedList(nums1, m, nums2, n) {
  
  let p1 = m - 1
  let p2 = n - 1
  let p = nums1.length - 1

  while(p1>=0 && p2>=0){
    if(nums1[p1] >= nums2[p2]){ //nums2 nos sirve
      nums1[p] = nums1[p1]
      p1--
    }else{
      nums1[p] = nums2[p2]
      p2--
    }
    p--
  }
  // console.log("p2", p2) //0
  //cuando nums1 nums2 son diferentes:
 for(i=0; i< p2 + 1; i++){
  nums1[i] = nums2[i]
 }

  return nums1;
}
console.log(mergeTwoSortedList(nums1, m, nums2, n));

