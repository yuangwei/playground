package leetcode

/*
 * @lc app=leetcode id=977 lang=golang
 *
 * [977] Squares of a Sorted Array
 */

/**
本题使用对向双指针解法，时间复杂度为O(n)，空间复杂度为O(n)，需要注意的一个点是: 题目要求从小到大排列，但要考虑负数的情况。

所以需要先创建好一个等大的数组，然后从末尾插入新的数据
*/

// @lc code=start
func sortedSquares(nums []int) []int {
	l := 0
	r := len(nums) - 1
	i := r
	res := make([]int, len(nums))
	for l <= r {
		ls := nums[l] * nums[l]
		rs := nums[r] * nums[r]
		if ls >= rs {
			res[i] = ls
			l++
		} else {
			res[i] = rs
			r--
		}
		i--
	}
	return res
}

// @lc code=end
