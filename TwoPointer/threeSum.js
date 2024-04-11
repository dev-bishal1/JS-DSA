/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let curr = nums[i];
    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;
    while (leftPointer < rightPointer) {
      const leftPointerVal = nums[leftPointer];
      const rightPointerVal = nums[rightPointer];
      const totalSum = curr + leftPointerVal + rightPointerVal;

      if (totalSum > 0) {
        rightPointer--;
      } else if (totalSum < 0) {
        leftPointer++;
      } else {
        result.push([curr, leftPointerVal, rightPointerVal]);
        leftPointer++;
        while (
          nums[leftPointer] === nums[leftPointer - 1] &&
          leftPointer < rightPointer
        ) {
          leftPointer++;
        }
      }
    }
  }

  return result;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
