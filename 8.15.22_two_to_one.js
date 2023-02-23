function longest(s1, s2) {
    // your code
    let aggregate = (s1 + s2).split('').sort()
    let final = []
    for(let i=0; i<aggregate.length; i++){
        if(final.indexOf(aggregate[i]) < 0){
            final.push(aggregate[i])
        }
    }

    return final.join('')
    
  }

longest("aretheyhere", "yestheyarehere")