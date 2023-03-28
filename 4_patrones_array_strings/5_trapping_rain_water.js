const alturas = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; //6

function mostWaterContainer(height) {
  let len = height.length - 1;
  let [maxLeft, maxRight] = [height[0], height[len]];
  let [left, right] = [0, len];
  let waterTrap = 0;
  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      waterTrap += maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      waterTrap += maxRight - height[right];
    }
  }

  return waterTrap;
}

console.log(mostWaterContainer(alturas));
