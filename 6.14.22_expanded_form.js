function expandedForm(num) {
    // Your code here
    num = ''+num
    let final = []
    let place = num.length
    for(let i=0; i<num.length; i++){
        if(place > 1 && num[i] === '0') {
            place--
        }
        else if(place > 1 && num[i] !== '0'){
            final.push(num[i]+'0'.repeat(place-1))
            place--
        } 
        else if(num[i] > 0) {
            final.push(num[i])
        }
    }
    console.log(final.join(' + '))
    return final.join(' + ')
}