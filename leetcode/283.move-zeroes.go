package leetcode

/*
 * @lc app=leetcode id=283 lang=golang
 *
 * [283] Move Zeroes
 */

// @lc code=start
func moveZeroes(nums []int) {
	if len(nums) == 0 {
		return
	}
	// i 指针遍历数组，j 指针指向非零元素要插入的位置
	j := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] != 0 {
			nums[j], nums[i] = nums[i], nums[j]
			j++
		}
	}
}

// @lc code=end
