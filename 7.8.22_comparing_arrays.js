function comp(array1, array2){

  //convert the 2nd array to its square roots
    let sqrts = array2.map((num) => Math.sqrt(num))
    let obj1 = {}
    let obj2 = {}

  //loop through square roots array
    sqrts.forEach((el) => {
        if(obj2[el]){
            obj2[el] += 1
        } else {
            obj2[el] = 1
        }
    })

  //loop through 1st array
    array1.forEach((el) => {
        if(obj1[el]){
            obj1[el] += 1
        } else {
            obj1[el] = 1
        }    
    })
    console.log(obj1, obj2)
  //loop through first object
  for(num in obj1){
    if(obj1[num] === obj2[num]){
        continue
    } else {
        return false
    }
  }
  return true
}

a1 = [9, 9, 9, 9, 5, 8, 7, 1, 8, 4];
a2 = [49, 81, 25, 81, 82, 64, 1, 81, 64, 16];

console.log(comp(a1, a2))