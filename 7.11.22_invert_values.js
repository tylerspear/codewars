function invert(array) {
    if(array.length < 1){
      return []
    } else {
      let inverse = []
      for(let i=0;i<array.length; i++){
        if(array[i] < 0){
          inverse.push(Math.abs(array[i]))
        } 
        else {
          inverse.push(Math.abs(array[i]) * -1)
        }
      }
      return inverse
    }
  }