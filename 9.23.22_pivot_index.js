function findEvenIndex(arr)
{
  //Code goes here!
  let total = arr.reduce((a,b) => a+b, 0)
  let left = 0
  for(let i=0; i<arr.length; i++){
    if(total - left - arr[i] == left){
      return i
    }
    
    left += arr[i]
  }
  
  return -1
}