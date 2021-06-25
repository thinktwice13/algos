// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
   const [short, long] = nums1.length < nums2.length ? [nums1,nums2]: [nums2,nums1]
   if (short.length < 1) return []
   // Map of the shorter array
   const map = {}
   for (let i = 0; i < short.length; i++) {
     map[short[i]] = (map[short[i]] || 0) + 1
   }

   return long.filter(num => {
     if (map[num] > 0) {
       map[num]--
       return true
     }
     return false
   })
};