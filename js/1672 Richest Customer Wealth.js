// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

var maximumWealth = function(accounts) {
    let max = 0;
    for(let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for(let j = 0; j < accounts[i].length; j++) {
            sum+=accounts[i][j];
        }
        if(sum>max) {
            max = sum;
        }
    }
    return max;
};