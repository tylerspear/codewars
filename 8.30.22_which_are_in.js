function inArray(array1,array2){
    let substrings = []
    array2 = array2.join(',')
    array1.forEach(el => {
        if(array2.indexOf(el) > -1){
            substrings.push(el)
        }
    });
    return substrings.sort()
}
console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))