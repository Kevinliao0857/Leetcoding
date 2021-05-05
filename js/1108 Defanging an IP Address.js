// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

var defangIPaddr = function(address) {
    const old = "."
    const replace = "[.]"
    const output = address.split(old).join(replace)
    return output
  };