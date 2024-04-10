/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    const sum = numbers[leftPointer] + numbers[rightPointer];
    if (sum === target) {
      return [leftPointer + 1, rightPointer + 1];
    }

    if (sum < target) {
      leftPointer += 1;
    } else {
      rightPointer -= 1;
    }
  }
};

const numbers = [-1, 0];
const target = -1;

console.log(twoSum(numbers, target));
