/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (numbers = []) => {
  const hashMap = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (hashMap.has(numbers[i])) return true;
    hashMap.set(numbers[i], numbers[i]);
  }

  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate2 = (numbers = []) => {
  const newSet = new Set(numbers);
  return newSet.size !== numbers.length;
};

// const numbers = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const numbers = [1, 3, 4, 2, 5, 6];
const result = containsDuplicate(numbers);
console.log(result);
