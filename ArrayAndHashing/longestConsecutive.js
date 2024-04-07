/**
 * @param {number[]} nums
 * @return {number}
 */
// without using sort
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  const set = new Set(nums);
  let max = 1;
  for (const number of set) {
    if (!set.has(number - 1)) {
      let x = number + 1;
      while (set.has(x)) {
        x++;
      }
      max = Math.max(max, x - number);
    }
  }
  return max;
};

// using sort
var longestConsecutive2 = function (nums) {
  if (nums.length === 0) return 0;
  const sortedNums = nums.sort((a, b) => a - b);
  let longestSequence = 1;
  let result = 1;
  for (let i = 0; i < sortedNums.length; i++) {
    let curr = sortedNums[i];
    let next = sortedNums[i + 1];
    if (next - curr === 0) {
      continue;
    }
    if (next - curr === 1) {
      longestSequence += 1;
    } else {
      result = Math.max(result, longestSequence);
      longestSequence = 1;
    }
  }

  return result > longestSequence ? result : longestSequence;
};

let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
