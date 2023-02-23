function findUniq(arr) {
    //get first element in arr
    let unique = arr[0]
    
    //filter the arr based on that element x2
    let unique1 = arr.filter(el => el != unique)
    let unique2 = arr.filter(el => el == unique)
    //return the shorter of the 2 arrays
    return unique1.length > unique2.length ? unique2[0] : unique1[0]
  }