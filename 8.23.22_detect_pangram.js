function isPangram(string){
    //...
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((el) => string.toLowerCase().includes(el))
    
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))