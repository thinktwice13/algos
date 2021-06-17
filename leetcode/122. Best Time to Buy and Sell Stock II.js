// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buyAt = prices[0];
  let sellAt = buyAt;

  for (let day = 1; day < prices.length; day++) {
    const price = prices[day];

    if (price > sellAt) {
      // If price is higher than our current sell price
      sellAt = price;
    } else {
      // Sell stock yesterday and buy today
      profit += sellAt - buyAt;
      buyAt = price;
      sellAt = price;
    }
  }

  return (profit += sellAt - buyAt);
};

const prices = [1, 2, 3, 4, 5];
maxProfit(prices);
