function DNAStrand(dna){
    //your code here
    let newStrand = dna.split('')
    newStrand.forEach((el, ind) => {
      if(el === 'A'){
        newStrand[ind] = 'T'
      } else if(el === 'T'){
        newStrand[ind] = 'A'
      } else if(el === 'G'){
        newStrand[ind] = 'C'
      } else if(el === 'C'){
        newStrand[ind] = 'G'
      }
    })
    return newStrand.join('')
  }