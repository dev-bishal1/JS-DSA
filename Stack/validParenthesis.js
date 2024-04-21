/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const mapBracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    if (mapBracket[char]) {
      stack.push(mapBracket[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
}

let s = "()[]{}";
console.log(isValid(s));
