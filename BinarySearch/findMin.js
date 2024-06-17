/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin2 = (nums) => {
  let left = nums[0];
  let right = nums[nums.length - 1];
  const result = [];

  while (left > right) {
    result.push(nums.pop());
    right = nums[nums.length - 1];
  }

  if (result.length) return result[result.length - 1];
  return nums[0];
};

var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = nums[mid];

    if (nums[low] <= nums[high]) {
      return nums[low];
    }

    if (nums[low] > guess) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return [0];
};

// const nums = [4, 5, 6, 7, 0, 1, 2];
const nums = [7, 0, 1, 2, 4, 5, 6];
console.log(findMin(nums));
