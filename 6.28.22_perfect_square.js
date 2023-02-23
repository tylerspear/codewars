function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if(Math.sqrt(sq) > 0 && Math.sqrt(sq) % 1 === 0){
        let next = sq+1
        while(sq){
            if(Math.sqrt(next) % 1 === 0){
                break;
            } else {
                next +=1
                continue
            }
      }
      return next
    }
    else {
        return -1;    
    }
}