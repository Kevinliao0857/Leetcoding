//Input: nums = [3,1,2,10,1]
//Output: [3,4,6,16,17]


var runningSum = function(nums) {
    for(let i = 1; i < nums.length; i++){
        nums[i] += nums[i - 1];
    }
    return nums;
};