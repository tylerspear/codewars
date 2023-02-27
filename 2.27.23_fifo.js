function fifo(n, referenceList) {
	let final = Array(n).fill(-1) //fill an array of n length with -1's
    let position = 0 //keep track of index
    
    for (let i of referenceList) {
        if (!final.includes(i)) { //if the item is not already in the final array
            final[position] = i //update the final arr to have the element at index 'position'
            position = (position + 1) % n  //add 1 to position and mod by n prevent going over n
        }
    }

    return final
}

console.log(fifo(4, [1,2,3,3,4,5,1]))