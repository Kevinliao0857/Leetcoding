// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false

var checkIfPangram = function(sentence) {
    let alph = "abcdefghijklmnopqrstuvwxyz"
     
    for(let letter of sentence) {
         if(sentence.length < 26) {
             return false
         }
     alph = alph.replace(letter, "")
    }   
     return alph.length <= 0
 };