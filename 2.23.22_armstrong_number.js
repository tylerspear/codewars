/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
*/

function narcissistic(value) {
    // Code me to return true or false
    
    //split the number into digits
    let digits = Array.from(value.toString()).map(Number)
    let power = digits.length
    //raise each one to the length of the original num
    let total = digits.map(el => el**power).reduce((partial, a) => partial+a, 0)
    //sum the numbers and compare to the original num
    return total == value
  }