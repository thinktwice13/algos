// Find the minimum number of coins that can be used to match a customer request
// Coins: [100,50, 25, 10,5, 1]

const coins = [100,50,25,10,5,1]

const map = {}

module.exports = numChips = val => {
  let count = 0
  for (let coin of coins) {
    if (val < 1) return count
    const num = Math.floor(val/coin)
    val -= num * coin
    count += num
  }

  return count
}

// O(1) because regaardless of input, we always go through the fixed coins array