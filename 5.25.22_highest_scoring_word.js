// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    //key for points
    let key = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    //split words into an arr
    let words = x.split(' ')
    console.log(words)
    //keep track of high score & position
    let highScore = 0
    let highestPos = 0
    
    words.forEach((el, ind) => {
      let score = 0
      
      for(let i=0; i<el.length; i++){
        score += key.indexOf(el[i])
      }
      
      if(score > highScore){
        highScore = score
        highestPos = ind
      }
    })
    return words[highestPos]   
  }
