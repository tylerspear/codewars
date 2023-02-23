function findShort(s){
    let words = s.split(' ')
    let shortest = words[0].length
    for(let i=1; i < words.length; i++){
      if(words[i].length < shortest){
        shortest = words[i].length
      }
    }
  
  return shortest
  }