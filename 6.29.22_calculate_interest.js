function calculateYears(principal, interest, tax, desired) {
    // your code
  let total = principal
  let years = 0
  while(total < desired){
    total += (total * interest) - (total * interest * tax)
    years += 1
  }
  return years
}