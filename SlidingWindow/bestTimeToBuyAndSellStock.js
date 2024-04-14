/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let maxProfit = 0;
  let leftPointer = 0;
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[leftPointer];
    maxProfit = Math.max(maxProfit, profit);
    if (prices[leftPointer] > prices[i]) {
      leftPointer = i;
    }
  }

  return maxProfit;
};

const prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
