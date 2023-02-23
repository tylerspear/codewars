// write the function isAnagram
var isAnagram = function(test, original) {

    //if lengths dont match, return false right away
    //or if we do not get a value for the input
    if(test.length !== original.length || !test || !original){
      return false
    }

    //if the strings match return true
    if(test === original){
        return true
    }
    //split the strings to array
    //convert to lowercase
    //sort them alphabetically
    //join back together and compare
    let str1 = test.split('').map(el => el.toLowerCase()).sort().join('')
    let str2 = original.split('').map(el => el.toLowerCase()).sort().join('')
    console.log(str1, str2)
    return str1 === str2
  };

console.log(isAnagram('WXFozUPLgurLKB', 'OPrXWBFLouzUgK'))