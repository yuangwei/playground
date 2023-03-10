package leetcode

/*
 * @lc app=leetcode id=844 lang=golang
 *
 * [844] Backspace String Compare
 */

// @lc code=start
func backspaceCompare(s string, t string) bool {
	stackS, stackT := []rune{}, []rune{}
	for _, c := range s {
		if c == '#' {
			if len(stackS) > 0 {
				stackS = stackS[:len(stackS)-1]
			}
		} else {
			stackS = append(stackS, c)
		}
	}
	for _, c := range t {
		if c == '#' {
			if len(stackT) > 0 {
				stackT = stackT[:len(stackT)-1]
			}
		} else {
			stackT = append(stackT, c)
		}
	}
	return string(stackS) == string(stackT)
}

// @lc code=end
