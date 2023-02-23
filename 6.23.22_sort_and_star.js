function twoSort(s) {
    s.sort()
    console.log(s)
    let first = s[0].split('')

    for(let i=0; i<first.length; i++){
        if(i < first.length - 1){
            first[i] = first[i] + '***'
        }
    }

    first.join('')
    console.log(first)
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])