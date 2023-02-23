
 let isSubsequence = function(s, t) {
    let i = 0,j = 0
    //while we are in bounds of both strings
    while(i < s.length && j < t.length){
        //if char in S is found in T, increcment to next letter in S
        if(s[i] == t[j]){
            i += 1
        }
        //keep moving through T looking for the letter in S
        j += 1
    }
    //if all characters in s were found, return true, else false
    return i == s.length
    
 };

console.log(isSubsequence('aaaaaa', 'bbaaaa'))
console.log(isSubsequence('bb', 'ahbgdc'))
console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('ab', 'baab'))
