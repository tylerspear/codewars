let isIsomorphic = function(s, t) {
    //initialize empty objects
    let mapST = {}
    let mapTS = {}
    //loop over both strings
    for(let i=0; i<s.length; i++){
        //get the chars from each string at the index
        let c1 = s[i]
        let c2 = t[i]
        //if the the chars are already mapped return false. Compare both ways
        //e>a, g>d
        //f>b, o>a, o>r = false
        if((mapST[c1] && mapST[c1] != c2) || (mapTS[c2] && mapTS[c2] != c1)){
            return false
        }
        mapST[c1] = c2
        mapTS[c2] = c1
    }
    return true
};

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))