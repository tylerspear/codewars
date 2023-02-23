function moveZeros(arr) {
    let zeros = arr.filter(el => el === 0)
    arr = arr.filter(el => el !== 0)
    arr.push(...zeros)
    return arr
}

console.log(moveZeros(['a',
'b',
null,
'c',
'd',
1,
false,
1,
3,
[],
1,
9,
{},
9,
0,
0,
0,
false,
0,
0,
[],
0,
0,
0,
0,
0]))