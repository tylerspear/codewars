function findOutlier(integers){ 
    let evens = integers.filter(n => n%3 !== 0)
    let odds = integers.filter(n => n%2 !== 0)
    return evens.length === 1 ? evens[0] : odds[0]
  }

  console.log(findOutlier([0, 1, 2]))