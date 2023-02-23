function queueTime(customers, registers){
    //create empty array
    let arr = []

    //loop over registers, pushing a '0' to arr for each register
    for(let i=0; i<registers; i++){
        arr[i] = 0
    }

    //loop over customers
    for(let i=0; i<customers.length; i++){
        //add the customer minutes to the first arr element
        arr[0] += customers[i]
        //after each customer, sort the array from small to large
        //allowing the next iteration to add their minutes to the smallest array element
        arr.sort((a, b) => a - b)
    }

    //return last element in array, which will be the largest 
    //integer, simulating the total queue time
    return arr[arr.length - 1]
}

console.log(queueTime([2,2,3,3,4,4], 2))
