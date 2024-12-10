var array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

//////////////////////

function evenNumbers(a1){
    return a1.filter(num => num % 2 === 0);
}


const q1 =  evenNumbers(array1)

console.log(q1) //[ 2,4,6,8,10,12,14,16,18 ]

//////////////////////////////////////////////////////////////////////////////////



function largestNumber(a2){
    return Math.max(...a2)
}
const q2 = largestNumber(array1)

console.log(q2) // 19


///////////////////////////////////////////


function reverseNumber(a3){
    return a3.reverse()
}
const q3 = reverseNumber(array1)

console.log(q3) //[19, 18, 17, 16, 15, 14, 13, 12, 11, 10,  9,  8,  7,  6, 5,  4,  3,  2,  1]


//////////////////////////////////////


let array2 = [ 1, 2, 2, 3, 5, 8, 3, 5 ];

function dublicatsNumber(a4){
    return a4.filter((num, index) => a4.indexOf(num) !== index)
}

const q4 = dublicatsNumber(array2)

console.log(q4) //[ 2, 3, 5 ]

