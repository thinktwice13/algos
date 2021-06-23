// https://leetcode.com/problems/happy-number/

// How to detect a loop? When result > 1 and all of the digits have been previously mapped

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
   let slow = n
   let fast = getSum(slow)
   while (fast!=slow && fast!=1) {
     slow = getSum(slow)
     fast = getSum(getSum(fast))
   }

   return fast == 1
};

const getSum = (n) => n.toString().split("").reduce((res, num) => Number(num)**2 + res,0)

const n = 7
isHappy(n)
