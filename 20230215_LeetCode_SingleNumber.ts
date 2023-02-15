/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = new Object()
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] += 1
        } else {
            obj[nums[i]] = 1
        }
    }

    let number = 0;
    for (const key in obj) {
        if (obj[key] === 1) {
            number = parseInt(key)
            break
        }
    }

    return number
};

// 1. 첫번째 순회하며 배열 내 요소의 값들이 몇개씩인지 확인한다.
// 2. 이것을 객체의 키, 값으로 저장해서 {값 : 개수}의 형태로 리턴한다.
// 3. 개수가 1인 요소의 key를 리턴한다.

// https://leetcode.com/problems/single-number/