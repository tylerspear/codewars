Array.prototype.reverse = function() {
    //for loop, getting first and last array indexes. Loop will end when it reaches halfway point
    for(let i=0, j=this.length-1; i < j; i++, j--) {
      //get starting element and store in a holding variable
      let temp = this[i]
      //update starting element with last element value
      this[i] = this[j]
      //update last element with temporary value
      this[j] = temp
    }
    return this
  };