function spinWords(string){
    let words = string.split(' ').map(word => word.length > 4 ? word.split('').reverse().join('') : word)
    return words.join(' ')
}

console.log(spinWords('Welcome'))
console.log(spinWords('Hey fellow warriors'))