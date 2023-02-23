function persistence(num) {
    //keep track of iterations
    let count = 0
    let digits = num
    
    while((''+digits).length > 1){
      let nums = (''+digits).split('')
      count += 1
      digits = nums.reduce((prev, curr) => Number(prev)*Number(curr), 1)
    }
    return count
  }
