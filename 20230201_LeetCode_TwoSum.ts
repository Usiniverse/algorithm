const twoSum = function(nums, target): number[] {
    for (let i = 0; i<nums.length; i++) {
        for (let j = i+1; j<nums.length; j++) {
            if (nums[i]+nums[j] == target) {
                return [i,j];
            }
        }
    }
    return [];
};

// 배열 요소 중 2개를 합쳐서 target이 됨
// -> target = nums[i] + nums[j]
// [i, j] 의 인덱스를 넣은 배열을 리턴

// https://leetcode.com/problems/two-sum/description/