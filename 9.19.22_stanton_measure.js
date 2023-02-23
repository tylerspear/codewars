/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/

function stantonMeasure(arr) {
    let count = 0
    let stanton = 0
    
    for(let i=0; i<arr.length; i++){
      if(arr[i] === 1){
        count += 1
      }
    }
    for(let i=0; i<arr.length; i++){
      if(arr[i] === count){
        stanton += 1
      }
    }
    return stanton
  }