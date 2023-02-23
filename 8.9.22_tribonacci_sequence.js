function tribonacci(signature,n){
    if(n === 0){
        return []
    }
    if(n < 3){
        return signature.slice(0, n)
    }

    //initialize the final arr
    let trib = []
    
    //get length that n should be (final array)
    
    //loop until n
    for(let i=0; i < n; i++){
     //push the first 3 elements of the signature
      if(i < 3){
        trib.push(signature[i])
      } else {
        //add previous 3 elements together and push to trib arr
        trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3])
      }
    
    }
    
    return trib
}

console.log(tribonacci([1,1,1],10)) //(10) [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
console.log(tribonacci([1,1,1],1))
console.log(tribonacci([1,2,3],10))