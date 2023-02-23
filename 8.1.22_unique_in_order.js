var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let sequence = !Array.isArray(iterable) ? iterable.split('') : iterable
    let final = []
    
    for(let i=0; i<sequence.length; i++){
      if(sequence[i+1] !== sequence[i]){
        final.push(sequence[i])
      }
    }
    return final
  }

console.log(uniqueInOrder('ABBCcAD'))