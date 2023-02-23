function removeEveryOther(arr){
    //your code here
    let filtered = arr.filter((el, ind) => {
        return ind % 2 === 0
    })
    return filtered
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))