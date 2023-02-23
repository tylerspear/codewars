function order(words){
    //if there is an empty string, return
    if(!words){
        return ""
    }
    //split the string into an array
    let wordsArr = words.split(' ')
    //empty array
    let order = []
    //loop over array (words)
    for(let i=0; i<wordsArr.length; i++){
        //loop over letters in word
        for(let j=0; j<wordsArr[i].length; j++){
            //if there is a number, push to array with the number nested
            if(Number.isInteger(Number(wordsArr[i][j]))){
                order.push([wordsArr[i], Number(wordsArr[i][j])])
            }
        }
    }

    //sort the array by index 1
    order.sort((function(index){
        return function(a, b){
            return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
        };
    })(1))
    //push the words to an array
    let final = order.map(el => el[0])
    //join it
    return final.join(' ')
  }

console.log(order("is2 Thi1s T4est 3a"))