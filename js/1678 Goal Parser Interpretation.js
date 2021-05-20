// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

var interpret = function(command) {

    return command.split("()").join("o").split("(al)").join("al")
    
};