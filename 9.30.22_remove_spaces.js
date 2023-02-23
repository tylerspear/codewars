function noSpace(s) {
  
    let chars = s.split('').filter(el => el !== ' ').join('')
    return chars
    
}