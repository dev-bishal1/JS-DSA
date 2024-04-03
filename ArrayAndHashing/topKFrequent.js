/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// without using sort
var topKFrequent = function (nums, k) {
  const hashMap = new Map();
  const array = new Array(nums.length + 1).fill(0);
  const result = [];

  console.log(array);
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);
  }

  for (let [key, value] of hashMap) {
    const prev = array[value] || [];
    prev.push(key);
    array[value] = prev;
    console.log(array);
  }

  array.reverse();
  for (let item of array) {
    if (k < 1) break;
    if (item) {
      for (let el2 of item) {
        result.push(el2);
        k--;
      }
    }
  }

  return result;
};

// with using sort
var topKFrequent2 = function (nums, k) {
  const obj = new Map();
  nums.forEach((num) => {
    obj.set(num, obj.get(num) + 1 || 1);
  });
  let temp = Array.from(obj.entries()).sort((a, b) => b[1] - a[1]);
  temp.sort((a, b) => b[1] - a[1]);
  return temp.slice(0, k).map((entry) => entry[0]);
};

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;

console.log(topKFrequent(nums, k));
