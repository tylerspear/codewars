function countTheDigit(n, d) {
    //square all nums from 0 to n
    let squares = []
    let count = 0

    for (let i=0; i<=n; i++) {
        squares.push(i**2)
    }
    
    //count the number of times d is used
    for(let i=0; i<squares.length; i++){
        if((squares[i]+'').indexOf(`${d}`) > -1){
            count+=1
        }
    }
    return count
    //return the count of d
}

console.log(countTheDigit(10, 1))