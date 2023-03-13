/*
 * @lc app=leetcode id=209 lang=typescript
 *
 * [209] Minimum Size Subarray Sum
 * 
 * 
 */

/**  
 * 
 * 我的错误答案
 
 let left = 0, right = 0, len = Infinity, cur = 0;
  while (right < nums.length) {
      if (left === right) {
          if (nums[left] === target) {
              return 1;
          }
      } else if (cur + nums[right] === target) {
          len = Math.min(right - left + 1, len);
          cur = 0;
          left++;
      } else if (cur + nums[right] > target) {
          cur = cur - nums[left];
          left++;
      } else {
          cur = cur + nums[right];
          right++;
      }
  }
  return len === Infinity ? 0 : len;
 * 
 * 
*/
// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0, right = 0, len = Infinity, cur = 0;
  
  while (right < nums.length) {
    cur += nums[right];
    right++;
    while (cur >= target) {
      len = Math.min(len, right - left);
      cur -= nums[left];
      left++;
    }
  }
  return len === Infinity ? 0 : len;
}
// @lc code=end

