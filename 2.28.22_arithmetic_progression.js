function arithmeticSequenceElements(n, d, a) {
    let arr = []
    arr.push(n)

    while(arr.length < a) {
        arr.push(n + d)
        n = n+d
    }

    return arr.join(', ').toString()
}

console.log(arithmeticSequenceElements(1, 2, 5))