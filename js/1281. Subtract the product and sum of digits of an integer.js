// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15


var subtractProductAndSum = function(n) {
    let stringDigits = n.toString().split("");
    let digits = stringDigits.map(Number)
    const reducer1 = (accumulator, currentValue) => accumulator + currentValue;
    const reducer2 = (accumulator, currentValue) => accumulator * currentValue;
    
    let product = digits.reduce(reducer2)
    let sum = digits.reduce(reducer1)
    return output = product - sum 
};