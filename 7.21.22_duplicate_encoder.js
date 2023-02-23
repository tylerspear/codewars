function duplicateEncode(word){
    // ...
  let counts = {}
  let words = word.toLowerCase().split('')
  let final = ''

  for(let i=0; i<words.length; i++){
    if(counts[words[i]]){
      counts[words[i]] += 1
    } else {
      counts[words[i]] = 1
    }
  }

  for(let i=0; i<words.length; i++){
    if(counts[words[i]] < 2){
        final += '('
    } else {
        final += ')'
    }
  }
  return final
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("(( @"))