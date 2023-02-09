const isHappy = function(n) {
    let target = n;
    let log = [];
    while (1) {
        const digits = target.toString().split('').map(Number);
        let sum = 0;
        digits.forEach(elem => sum += Math.pow(elem,2));
        if (sum === 1) return true;
        else { // @ts-ignore
            if (log.find(elem => elem === sum)) return false;
        }
        log.push(sum);
        target = sum;
    }
    console.log('log : ', log)
};

// 1. 숫자를 받아 싹 스트링으로 바꾸기
// 2. 각 자릿수를 제곱하기
// 3. 제곱한 수를 더하기
// 4. 반복하다가 1이 나오면 true, 1이 아니면 false

// https://leetcode.com/problems/happy-number/