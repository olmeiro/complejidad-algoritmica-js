/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  if (grid == null || grid.length === 0) {
    return 0;
  }

  let freshCount = 0;
  const queue = [];

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const orange = row[j];
      if (orange === 2) {
        queue.push([i, j]);
      }
      if (orange === 1) {
        freshCount++;
      }
    }
  }

  if (freshCount === 0) {
    return 0;
  }

  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];
  let days = 0;
  while (queue.length !== 0) {
    days++;
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const rottenOrange = queue.shift();
      for (let j = 0; j < directions.length; j++) {
        const direction = directions[j];
        const x = rottenOrange[0] + direction[0];
        const y = rottenOrange[1] + direction[1];
        if (
          x >= 0 &&
          x < grid.length &&
          y >= 0 &&
          y < grid[0].length &&
          grid[x][y] !== 2
        ) {
          grid[x][y] = 2;
          queue.push([x, y]);
          freshCount--;
        }
      }
    }
  }
  return freshCount === 0 ? days - 1 : -1;
};

//Implementation:
// 1. Create a queue and add all rotten oranges to the queue.
// 2. Initialize a count variable to keep track of all fresh oranges.
// 3. Initialize a days variable to keep track of the number of days that have passed.
// 4. Initialize a directions array to keep track of all possible directions.
// 5. While the queue is not empty, increment the days variable.
// 6. For each orange in the queue, check all possible directions.
// 7. If the orange is fresh, decrement the fresh count and add the orange to the queue.
// 8. Return the number of days if the fresh count is 0, otherwise return -1.
// Time Complexity: O(n)
// Space Complexity: O(n)

//Examples:
//Input: 
const grid = [[2,1,1],[1,1,0],[0,1,1]]
console.log(orangesRotting(grid));
//Output: 4
//Explanation:
//At the end of day 1, the grid looks like this:
//2 1 1
//1 1 0
//0 1 1
//At the end of day 2, the grid looks like this:
//2 2 1
//1 1 0
//0 1 1
//At the end of day 3, the grid looks like this:
//2 2 2
//1 1 0
//0 1 1
//At the end of day 4, the grid looks like this:
//2 2 2
//2 1 0
//0 1 1
