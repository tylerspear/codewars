// Sum Numbers
function sum (numbers) {
    "use strict";
  if(numbers.length < 1){
    return 0
  }
  let summed = numbers.reduce((curr, prev)=> curr + prev, 0)
  return summed
    
};