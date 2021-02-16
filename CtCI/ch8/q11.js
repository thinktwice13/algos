// Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent), write code to calculate the number of ways of representing n cents.

const denoms = [25,10,5,1]

const makeChange = (targetAmount, index = 0) => {
  const currDenomValue = denoms[index]
  if (currDenomValue === 1) return 1; // Always only one way to represent an amount with pennies
  
  let combinations = 0
  // For each denom multiplier value
  for (let currDenomCount = 0; currDenomCount * currDenomValue <= targetAmount; currDenomCount++) {
    const remainingAmount = targetAmount - (currDenomCount * currDenomValue)
    // Add all combinations from next (smaller) denomination 
    combinations += makeChange(remainingAmount, index + 1)
  }
  return combinations
}

const amount = 10
const combos = makeChange(amount)