function digital_root(n) {
    // copy the initial value so it can be changed later on
    let sum = n

    //keep looping while the sum has more than 1 digit
    while(sum > 9){
        //split the sum into an array
        //loop over each element and add it to the previous
        //arrive at final value and check against while loop condition
        sum = String(sum).split('').reduce((curr, prev) => Number(curr) + Number(prev), 0)
    }
    
    return sum
}

console.log(digital_root(456))