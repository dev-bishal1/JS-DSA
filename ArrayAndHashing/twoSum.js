/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const requiredNumber = target - nums[i];
    if (hashMap.has(requiredNumber)) {
      return [hashMap.get(requiredNumber), i];
    }
    hashMap.set(nums[i], i);
  }

  return [];
};

let nums = [3, 3],
  target = 6;

console.log(twoSum(nums, target));
