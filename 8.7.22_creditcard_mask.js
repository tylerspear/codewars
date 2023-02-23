// return masked string
function maskify(cc) {
    if(cc.length < 5){
      return cc
    } else {
      let newStr = ''
      newStr += '#'.repeat(cc.length - 4)
      newStr += cc.substring(cc.length - 4)
      return newStr
    }
  }