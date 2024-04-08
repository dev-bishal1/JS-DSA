/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const formattedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let leftPointer = 0;
  let rightPointer = formattedString.length - 1;

  while (leftPointer <= rightPointer) {
    if (formattedString[leftPointer] !== formattedString[rightPointer]) {
      return false;
    }
    leftPointer += 1;
    rightPointer -= 1;
  }
  return true;
};

const s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
