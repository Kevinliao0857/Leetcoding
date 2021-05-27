// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false

var arrayStringsAreEqual = function(word1, word2) {
 
    if(word1.join("") == word2.join("")) {
        return true
    } else {
        return false
    }
};