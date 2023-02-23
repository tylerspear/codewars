function towerBuilder(nFloors) {
    let floors = []
    
    for(let i=0; i<nFloors; i++){
        floors.push(" ".repeat(nFloors - i - 1)
            + "*".repeat((i*2) + 1)
            + " ".repeat(nFloors - i - 1)
        )
    }
    
    return floors
  }

console.log(towerBuilder(3))
console.log(towerBuilder(6))