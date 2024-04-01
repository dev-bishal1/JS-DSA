/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const hashMap = new Map();
  for (let i = 0; i < s.length; i += 1) {
    hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
  }

  for (let j = 0; j < t.length; j += 1) {
    if (!hashMap.has(t[j])) return false;
    const currentElementValue = hashMap.get(t[j]);
    if (currentElementValue - 1 === 0) {
      hashMap.delete(t[j]);
    } else {
      hashMap.set(t[j], currentElementValue - 1);
    }
  }

  return hashMap.size === 0;
};

// LeetCode best solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram2 = (s, t) => {
  if (s.length != t.length) {
    return false;
  }

  const charArray = Array(26).fill(0);

  for (var i = 0; i < s.length; i++) {
    charArray[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    charArray[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  return charArray.every((count) => count == 0);
};

let s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t));
