/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const position = Math.floor((left + right) / 2);
    const currentNumber = nums[position];
    if (currentNumber === target) return position;

    if (currentNumber < target) {
      left = position + 1;
    } else {
      right = position - 1;
    }
  }

  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12],
  target = 2;
console.log(search(nums, target));
