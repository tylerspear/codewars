function accum(s) {
    //split the string
	let letters = s.split('')
    let final = []
    //loop over string
    for(let i=0; i<letters.length; i++){
        let repeats = ''
        repeats += letters[i].toUpperCase()
        repeats += letters[i].toLowerCase().repeat(i)
        final.push(repeats)
    }
    //create a string of repeats
    //capitalize first

    //push to an array

    //join array with '-' character
    return final.join('-')
}

console.log(accum("ZpglnRxqenU"))