function getSum( a,b )
{
  let total = 0
  
  if(a > b){
    let c = a
    a = b
    b = c
  }
  
  for(let i=a; i<=b; i++){
    total += i
  }
   //Good luck!
  return total
}