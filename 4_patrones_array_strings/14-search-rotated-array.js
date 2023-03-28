function searchInRotatedArray(nums, objetivo) {
 
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);

    if (nums[middle] === objetivo)
      return middle;

    if (nums[middle] < nums[right]) { 
      if (objetivo > nums[middle]) {
        left = middle + 1;
      }
      else {
        right = middle - 1;
      }
    }
    else {
      //Rotated
      if (objetivo > nums[middle]) {
        right = middle - 1;
        
      }
      else {
        left = middle + 1;
      }
    }
  }
  return -1;
}

console.log(searchInRotatedArray([4,5,6,7,0,1,2], 0))
console.log(searchInRotatedArray([4,5,6,7,0,1,2], 3))