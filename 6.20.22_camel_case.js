// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let final = []
    let chars = string.split('')
    chars.forEach(char => {
      if(char === char.toUpperCase()){
        final.push(' ' + char)
      } else {
        final.push(char)
      }
    })
    return final.join('')
  }