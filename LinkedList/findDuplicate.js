const findDuplicate = (nums) => {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  let slow2 = 0;
  while (slow !== slow2) {
    slow = nums[slow];
    slow2 = nums[slow2];
  }

  return slow;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
