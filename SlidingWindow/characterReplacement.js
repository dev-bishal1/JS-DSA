/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// Time complexity O(26 * n)
const characterReplacement = (s, k) => {
  const hashMap = new Map();
  let left = 0;
  let maxWindow = 0;

  for (let i = 0; i < s.length; i++) {
    hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);

    while (i - left + 1 - Math.max(...[...hashMap.values()]) > k) {
      hashMap.set(s[left], hashMap.get(s[left]) - 1);
      left += 1;
    }

    maxWindow = Math.max(maxWindow, i - left + 1);
  }

  return maxWindow;
};

// more optimized solution || Time complexity O(n)
const characterReplacement2 = (s, k) => {
  const hashMap = new Map();
  let left = 0;
  let maxWindow = 0;
  let maxFrequency = 0;

  for (let i = 0; i < s.length; i++) {
    hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
    maxFrequency = Math.max(maxFrequency, hashMap.get(s[i]));

    while (i - left + 1 - maxFrequency > k) {
      hashMap.set(s[left], hashMap.get(s[left]) - 1);
      left += 1;
    }

    maxWindow = Math.max(maxWindow, i - left + 1);
  }

  return maxWindow;
};

let s = "ABAB",
  k = 2;

console.log(characterReplacement2(s, k));
