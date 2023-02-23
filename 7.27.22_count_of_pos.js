function countPositivesSumNegatives(input) {
  // your code here
  console.log(input)
  if(input === null || input.length == 0 || input.includes(null)){
    return []
  }
  
  let pos = input.filter(el => el > 0).length
  let neg = input.filter(el => el < 0).reduce((prev, curr) => prev + curr, 0)
  return [pos,  neg]
}