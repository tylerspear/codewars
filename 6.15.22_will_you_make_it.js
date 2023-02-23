const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    console.log(fuelLeft * mpg)
    if((mpg * fuelLeft) < distanceToPump){
      return false
    } else {
      return true
    }
  }
