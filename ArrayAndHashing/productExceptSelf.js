/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = Array(nums.length).fill(0);
  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix = prefix * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * suffix;
    suffix = suffix * nums[i];
  }

  return result;
};

let nums = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums));
