function SeriesSum(n)
{
  if(n < 1){
    return "0.00"
  }
  if(n === 1){
    return "1.00"
  }
  
  // Happy Coding ^_^
  let sum = 1.00
  let denom = 4
  
  for(let i=1; i<n; i++){
    let add = 1/denom
    sum += add
    denom += 3
  }

  return String(sum.toFixed(2))
}

console.log(SeriesSum(2))
console.log(SeriesSum(3))