function stray(numbers) {
    let counts = {}

    numbers.forEach((el, ind) => {
        if(counts[el]){
            counts[el] += 1
        } else {
            counts[el] = 1
        }
    })
    for(let key in counts){
        if(counts[key] === 1){
            return Number(key)
        }
    }
}



console.log(stray([1, 1, 2]))