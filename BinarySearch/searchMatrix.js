/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let row = matrix.length;
  let col = matrix[0].length;
  let left = 0,
    right = row * col - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let mid_val = matrix[Math.floor(mid / col)][mid % col];

    if (mid_val === target) return true;
    else if (mid_val < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 30;

console.log(searchMatrix(matrix, target));
