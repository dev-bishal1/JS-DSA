/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = (nums, target) => {
  let left = 0; // Initialize left pointer to the start of the array
  let right = nums.length - 1; // Initialize right pointer to the end of the array

  // Perform binary search while the left pointer is less than or equal to the right pointer
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Calculate the middle index

    if (nums[mid] === target) {
      // If the middle element is the target, return the index
      return mid;
    }

    // Determine if the left half is sorted
    if (nums[left] <= nums[mid]) {
      // Check if the target is within the sorted left half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Narrow search to the left half
      } else {
        left = mid + 1; // Narrow search to the right half
      }
    } else {
      // Otherwise, the right half must be sorted
      // Check if the target is within the sorted right half
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Narrow search to the right half
      } else {
        right = mid - 1; // Narrow search to the left half
      }
    }
  }

  return -1; // Return -1 if the target is not found in the array
};

let nums = [5, 1, 2, 3, 4],
  target = 1;

console.log(search(nums, target));
