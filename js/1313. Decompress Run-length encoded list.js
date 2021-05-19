// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

var decompressRLElist = function(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i ++) {
        let freq = nums[2 * i];
        let val = nums[2*i + 1];
        while (freq > 0) {
            output.push(val);
            freq --;
        }
    }
    return output;
};