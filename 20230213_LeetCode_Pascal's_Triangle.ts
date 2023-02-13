/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    // 새 배열 생성
    let result = [[1], [1,1]]
    if (numRows === 1) {
        return [[1]]
    } else if (numRows === 2) {
        return result
    }
    for (let i = 2; i < numRows; i++) {
        let arr = []
        for (let j = 0; j < result[i-1].length; j++) {
            if (j === 0) {
                arr.push(1)
            } else {
                let value = result[i-1][j-1] + result[i-1][j]
                arr.push(value)
            }
            if (j === result[i-1].length - 1) {
                arr.push(1)
            }
        }
        result.push(arr)
    }
    return result
};

// numRows의 길이는 outPut의 길이와 같다.
// outPut의 배열 요소의 처음과 마지막은 1이다.
// result[i]번째 배열은 result[i-1]의 result[j-1]와 result[j]의 합이다.
// 구조 상, 가장 우측 열을 배제하고 계산한 뒤, 가장 우측열에 위치한 1을 배열의 마지막에 추가한다.
// idx === 0 || 1 일 때는 우선 [[1]], [[1], [1,1]] 을 리턴한다.

// https://leetcode.com/problems/pascals-triangle/