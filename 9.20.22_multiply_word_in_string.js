function modifyMultiply (str,loc,num) {
    //Code here
      let words = str.split(' ')
      let word = words[loc]
      let final = []
      for(let i=0; i<num; i++){
        final.push(word)
      }
      
      return final.join('-')
} 