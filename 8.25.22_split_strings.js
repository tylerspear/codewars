function solution(str){
    if(str.length < 1){
      return []
    }
    
    //contain returned arr 
    let final = []
    //split the string
    let letters = str.split('')
    
    //group by 2's
    for(let i=0; i<letters.length; i+=2){
        if(i === letters.length-1){
            final.push(`${letters[i]}_`) 
        } 
        else {
            final.push(`${letters[i]}${letters[i+1]}`)
        }
      
    }
    
    //if you are at the end of the string
    //push final letter + '_'
    
    //return array
    return final
  }

console.log(solution("abcdef"))
console.log(solution("abcdefg"))