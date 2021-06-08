// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
 

/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    s = s.split(" ")
    // console.log(s)
    let newS = [];
    for(let i of s) {
        newS[i.slice(-1) -1] = [i.slice(0,-1)]
    }
    // console.log(newS.join(" "))
    return newS.join(" ")
};