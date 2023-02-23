// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let nums = x.split('')
    let newArr = nums.map((el, ind) => {
      if(Number(el) < 5){
        return '0'
      } else {
        return '1'
      }
    })
    return newArr.join('')
  }