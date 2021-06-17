// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  for (let day = 1; day < prices.length; day++) {
    const today = prices[day];
    const yday = prices[day - 1];
    const dayProfit = today - yday;
    if (dayProfit > 0) profit += dayProfit;
  }

  return profit;
};

const prices = [1, 2, 3, 4, 5];
maxProfit(prices);
