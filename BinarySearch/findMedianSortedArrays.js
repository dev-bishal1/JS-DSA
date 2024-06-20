/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let i = 0;
  let j = 0;
  const nums = [];
  while (i < nums1.length || j < nums2.length) {
    const nums1Val = i < nums1.length ? nums1[i] : Infinity;
    const nums2Val = j < nums2.length ? nums2[j] : Infinity;

    if (nums1Val <= nums2Val) {
      nums.push(nums1Val);
      i++;
    } else {
      nums.push(nums2Val);
      j++;
    }
  }
  let left = 0;
  let right = nums.length - 1;
  const isEvenArray = nums.length % 2 === 0;
  const mid = Math.floor((left + right) / 2);
  if (isEvenArray) {
    const secondMid = Math.ceil((left + right) / 2);
    return (nums[mid] + nums[secondMid]) / 2;
  }

  return nums[mid];
};

let nums1 = [1, 3],
  nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));
