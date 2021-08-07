/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let output = []
    
    for (let i = 0; i < nums.length; i++) {
        for(let j = 0; j <= nums.length; j++) {
            if (i === j) {
                break;
            }
            if (nums[i] + nums[j] === target) {
                output.push(i, j);
                return output;
            }
        }
    }
};