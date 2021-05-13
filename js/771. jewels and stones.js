// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

var numJewelsInStones = function(jewels, stones) {
    let output = 0;
    for(stone of stones)
    if(jewels.includes(stone)) {
        output += 1
    }
    return output

};