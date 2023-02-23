function points(games) {
    // your code here
    let total = 0
    
    let scores = games.map(score => {
      return score.split(':')
    })

    scores.forEach(score => {
      if(score[0] > score[1]){
        total += 3
      } else if(score[1] > score[0]){
        total += 0
      } else {
        total += 1
      }
    })
    return total 
  }

  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))