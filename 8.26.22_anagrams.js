function anagrams(word, words) {
    let str1 = word.split('').sort().join('')
    let anas = []
    
    for(let i=0; i<words.length;i++){
      if(str1 == words[i].split('').sort().join('')){
        anas.push(words[i])
      }
    }
    
    return anas
  }