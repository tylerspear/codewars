var countBits = function(n) {
    // Program Me
    let binary = n.toString(2)
    let ones = binary.split('').filter(num => num == '1')
    return ones.length
  };