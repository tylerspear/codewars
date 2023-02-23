function validatePIN (pin) {
    //return true or false

    if(pin.length !== 4 && pin.length !== 6 || pin.indexOf(' ') > -1 || pin.indexOf('\n') > -1){
      return false
    }
    
    let nums = pin.split('')

    return !nums.some(isNaN)
  }

console.log(validatePIN('123'))
console.log(validatePIN("123 "))
