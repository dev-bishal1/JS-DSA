/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
  if (nums.length === 0) {
    return [];
  }

  const queue = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(i);

    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
};

let nums = [8, 7, 6, 9];
k = 2;

console.log(maxSlidingWindow(nums, k));
