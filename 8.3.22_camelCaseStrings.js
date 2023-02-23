function toCamelCase(str){
    if(str.length < 1){
      return str
    }
    
      let delimiter = str.indexOf('-') > -1 ? '-' : '_'
      let words = str.split(delimiter)
      words.forEach((word, ind) => {
          if(ind === 0 && word[0] == word[0].toLowerCase()){
              //lowercase first letter of first word only if it is already lowercase
              words[ind] = word[0].toLowerCase() + word.substring(1)
          } else {
              //uppercase first letter of the rest of the words
              words[ind] = word[0].toUpperCase() + word.substring(1)
          }
          
      })
      return words.join('')
  }
toCamelCase("the_stealth_warrior")
toCamelCase("The-Stealth-Warrior")