/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */

var lemonadeChange = function (bills) {
	/*
		5	5	5	10	20
						i
		5	5	10	
  */
  // let has = {
  // 	'5': 0,
  // 	'10': 0
  // }
  // for (let i = 0; i < bills.length; i++) {
  //   if (bills[i] === 5) {
  //     has['5']++
  //   } else if (bills[i] === 10) {
  //     if (has['5'] > 0) {
  //       has['5']--
  //       has['10']++
  //     } else {
  //       return false
  //     }
  //   } else if (bills[i] === 20) {
  //     if (has['5'] === 0) {
  //       return false
  //     } else {
  //       if (has['10'] === 0) {
  //         if (has['5'] >= 3) {
  //           has['5'] -= 3
  //         } else {
  //           return false
  //         }
  //       } else {
  //         has['10']--
  //         has['5']--
  //       }
  //     }
  //   }
  // }
  // return true
  let five = 0, ten = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five++
    } else if (bills[i] === 10) {
      five--
      ten++
    } else {
      if (ten > 0) {
        five--
        ten--
      } else {
        five -= 3
      }
    }
    if (five < 0) return false
  }
  return true
};
// @lc code=end

