function reverseWords(str) {
    // Go for it
    let words = str.split(' ')
    let reversed = words.map(word => word.split('').reverse().join(''))
    reversed = reversed.join(' ')
    return reversed
}