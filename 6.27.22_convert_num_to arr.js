function digitize(n) {
    //code here
    n = n.toString().split('').reverse()
    n = n.map(el => Number(el))
  
    return n
}