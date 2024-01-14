package leetcode

// https://leetcode.com/problems/maximum-subarray/description/
func q53(nums []int) int {
	l := len(nums)
	// initial max
	cur := nums[0]
	total := nums[0]
	// for each subsequent number, check if it's better to start a new subarray or include it in the previous one,
	// then update the total accordingly
	for i := 1; i < l; i++ {
		cur += nums[i]
		if nums[i] > cur {
			cur = nums[i]
		}
		if cur > total {
			total = cur
		}
	}

	return total
}

// https://leetcode.com/problems/minimum-size-subarray-sum/description/
func q209(s int, nums []int) int {
	return 0
}
