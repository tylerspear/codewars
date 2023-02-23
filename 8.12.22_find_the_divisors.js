function divisors(integer) {
    let divisors = []
    
    for(let i=2; i<integer; i++){
      if(i === integer){
        continue
      } else if(integer % i === 0) {
        divisors.push(i)
      }
    }
    
    if(divisors.length === 0){
      return `${integer} is prime`
    } else {
      return divisors
    }
  };

console.log(divisors(13))