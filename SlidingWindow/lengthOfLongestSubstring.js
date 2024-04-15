/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (s.length < 1) return 0;
  const hashMap = new Map();
  let left = 0;
  let maxLength = 1;

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      const storedPosition = hashMap.get(s[i]);
      let j = left;
      while (j <= storedPosition) {
        hashMap.delete(s[j]);
        j += 1;
      }
      left = j;
    }
    hashMap.set(s[i], i);
    const diff = i - left + 1;
    maxLength = Math.max(maxLength, diff);
  }

  return maxLength;
};

const s = "";

console.log(lengthOfLongestSubstring(s));
