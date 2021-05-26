// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

var restoreString = function(s, indices) {
    let indexObj = {} 
    for(let i = 0; i < s.length; i++) {
        let number = indices[i]
        let letter = s[i]    
      indexObj[number] = letter   
    }
    let result = []  
    for (let j = 0; j < indices.length; j++) {
        const organized = indexObj[j]
        result.push(organized)
    }
    return result.join("")
};