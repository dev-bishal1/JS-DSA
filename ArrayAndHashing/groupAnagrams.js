/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const hashMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    const sortedString = [...strs[i]].sort().join();
    if (hashMap.has(sortedString)) {
      hashMap.get(sortedString).push(strs[i]);
    } else {
      hashMap.set(sortedString, [strs[i]]);
    }
  }

  return [...hashMap.values()];
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
