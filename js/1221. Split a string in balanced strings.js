// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", 
// each substring contains same number of 'L' and 'R'.


var balancedStringSplit = function(s) {
    let output = 0
    let count = 0

  for (let letter of s) {
    if (letter == 'R')
        count++;
      else
        count--;

    if (count == 0)
      	output++;
  }

	return output;
};