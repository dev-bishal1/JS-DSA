/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let result = 0;

  while (leftPointer < rightPointer) {
    const rightPointerValue = height[rightPointer];
    const leftPointerValue = height[leftPointer];

    const diff = rightPointer - leftPointer;
    const minValue = Math.min(leftPointerValue, rightPointerValue);
    const maximumArea = diff * minValue;

    result = Math.max(result, maximumArea);

    if (leftPointerValue < rightPointerValue) {
      leftPointer += 1;
    } else {
      rightPointer -= 1;
    }
  }

  return result;
};

const height = [1, 1];

console.log(maxArea(height));
