/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buyPrice = prices[0], maxProfit = 0
  
  for (let day = 1; day < prices.length; day++) {
    const price = prices[day]
    
    if (price < buyPrice) buyPrice = price
    
    const currentProfit = price - buyPrice
    if (currentProfit > maxProfit) maxProfit = currentProfit
  }
  
  return maxProfit
};