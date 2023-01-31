function maximumWealth(accounts: number[][]): number {
    let result: number[] = []
    for (let i = 0; i < accounts.length; i++) {
        const results = accounts[i].reduce(function add(sum, currValue) {
            return sum + currValue;
        }, 0)
        result.push(results)
    }
    console.log(Math.max.apply(null, result));
    
    return Math.max.apply(null, result)
};

const accounts = [[1,5],[7,3],[3,5]]

maximumWealth(accounts)

// accounts의 배열 요소는 배열이다.
// accounts[i]번째의 요소들의 합이 가장 큰 것을 output으로 리턴한다.

// 1. accounts[i]의 요소들을 더한다
// 2. 더한 값을 배열에 넣는다.
// 3. 배열의 요소 중 가장 큰 값을 리턴한다.

// https://leetcode.com/problems/richest-customer-wealth/description/