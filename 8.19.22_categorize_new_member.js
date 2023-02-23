function openOrSenior(data){
    // ...
    let memberships = []
    data.forEach(el => {
      if(el[0] >= 55 && el[1] > 7){
        memberships.push("Senior")
      } 
      else {
        memberships.push("Open")
      }
    })
    return memberships
  }