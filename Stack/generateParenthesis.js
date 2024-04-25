var generateParenthesis = function (n) {
  function backtrack(str = "", left = 0, right = 0, result = []) {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }

    if (left < n) {
      backtrack(str + "(", left + 1, right, result);
    }

    if (right < left) {
      backtrack(str + ")", left, right + 1, result);
    }

    return result;
  }

  return backtrack();
};

const n = 3;

console.log(generateParenthesis(n));
