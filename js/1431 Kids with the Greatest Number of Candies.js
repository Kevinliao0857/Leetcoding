// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

var kidsWithCandies = function(candies, extraCandies) {
    let output = []
    const max = Math.max(...candies)
    for(let i = 0; i < candies.length; i++) {
        if(candies[i]+extraCandies < max){
            output.push(false)
        } else {
            output.push(true)
        }  
    }
    return output
};