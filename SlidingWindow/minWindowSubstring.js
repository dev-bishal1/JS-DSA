/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  const tHashMap = new Map();
  const sHashMap = new Map();

  for (let i = 0; i < t.length; i++) {
    tHashMap.set(t[i], (tHashMap.get(t[i]) || 0) + 1);
  }

  let left = 0;
  let required = tHashMap.size;

  let have = 0;
  let result = [0, 0];
  let resultLength = Infinity;

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    sHashMap.set(curr, (sHashMap.get(curr) || 0) + 1);

    if (tHashMap.has(curr) && sHashMap.get(curr) === tHashMap.get(curr)) {
      have += 1;
    }

    while (have === required) {
      const windowLength = i - left + 1;
      if (windowLength < resultLength) {
        result = [left, i];
        resultLength = windowLength;
      }

      sHashMap.set(s[left], sHashMap.get(s[left]) - 1);

      if (
        tHashMap.has(s[left]) &&
        sHashMap.get(s[left]) < tHashMap.get(s[left])
      ) {
        have -= 1;
      }
      left += 1;
    }
  }

  const [l, r] = result;

  if (resultLength === Infinity) {
    return "";
  }

  return s.slice(l, r + 1);
};

let s = "aa",
  t = "aa";

console.log(minWindow(s, t));
