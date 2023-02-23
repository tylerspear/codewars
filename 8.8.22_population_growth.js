function nbYear(p0, percent, aug, p) {
    // your code
  let pop = p0
  let years = 0

  while(pop < p){
    pop = Math.floor(pop + (pop * (percent/100)) + aug)
    years++
    console.log(pop, years)
  }

  return years
}


nbYear(1500, 5, 100, 5000)