// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p) {
    
    let pow = p

    //split n into digits
    let num_arr = Array.from(n.toString()).map(Number) //convert each digit to an array

    let sum = 0

    //raise each digit to p+1 power
    for(let i=0; i<num_arr.length; i++){
        sum += num_arr[i]**pow
        pow+=1
    }
    //add them together
    if(sum == (n*p)){
        return p
    }
    else if(sum % n == 0) {
        return sum/n
    }
    else {
        return -1
    }
    //does that equal n * p? 
        //if yes, return p
        // else check if that number % n == 0
                //if true, return number/n
        //else return -1
}

console.log(digPow(46288, 3))