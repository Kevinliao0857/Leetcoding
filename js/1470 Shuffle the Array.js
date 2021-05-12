// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

var shuffle = function(nums, n) {
    let output = []
    for(let i = 0; i < nums.length/2; i++) {
        output.push(nums[i], nums[i+n])
    }
    return output
};