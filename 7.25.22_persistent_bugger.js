function persistence(num) {
  let times = 0
  //convert to string
  num = num.toString()

  //while more than 1 digit
  while(num.length > 1){
    times++
    //split into digits, convert to Numbers, multiply digits, convert back to string
    num = num.split('').map(Number).reduce((a,b) => a * b).toString()
  }

  return times
}

console.log(persistence(39))