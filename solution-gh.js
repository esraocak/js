// ! 1- JS-CC-001 : Reverse String
// ! Write a function that takes an array of characters and reverses the letters in place.

//? reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC 
//? reverse("Happy") ➞ yppaH

// const enterstring= prompt ("please write a word:");

// const strreverse= function (string) {
//     splitString = string.split("");
//     reserveString = splitString.reverse();
//     return joinString = reserveString.join("");

// }
// console.log(strreverse(enterstring));

//! 2- JS-CC-002 : Reverse Words
//! Write a function that takes an array of characters and reverses the words order.

//? Input : 'Clarusway' => Output : 'Clarusway'

//? Input : 'days. big make things Little' => Output : 'Little things make big days.'

// const strreverse= function (string) {
//     splitString = string.split(" ");
//     reserveString = splitString.reverse();
//     return joinString = reserveString.join(" ");

// }
// console.log(strreverse("Clarusway"));
// console.log(strreverse("days. big make things Little"));
//! JS-CC-003 : Merge Arrays
//! Write a function that takes two arrays of sorted numbers and combines them into one array as result.

// A = [13, 14, 16];
// B = [11, 13, 17];
// expectedOutput = [11, 12, 13, 14, 16, 17];

// A = [];
// B = [11, 13, 17];
// expectedOutput = [11, 13, 17];

// const mergeArray = (A, B) => {
//         combinedArr = A.concat(B)
//         sortedArr = combinedArr.sort((a, b) => a - b)
//         return sortedArr
// }
// console.log(mergeArray(A, B));

//! JS-CC-004 : Roman Numerals
//! Write a function that takes normal number( 8, 148, 457 ) and convert to Roman Numerals( VIII, CXLVIII, CDLVII )

unction intToRoman(num) {

    let m = ["", "M", "MM", "MMM"];
    let c = ["", "C", "CC", "CCC", "CD", "D",
        "DC", "DCC", "DCCC", "CM"];
    let x = ["", "X", "XX", "XXX", "XL", "L",
        "LX", "LXX", "LXXX", "XC"];
    let i = ["", "I", "II", "III", "IV", "V",
        "VI", "VII", "VIII", "IX"];


    let a1 = Math.floor(num / 1000);
    let a2 = Math.floor((num % 1000) / 100);
    let a3 = Math.floor((num % 100) / 10);

    let thousands = m[a1];
    let hundreds = c[a2];
    let tens = x[a3];
    let ones = i[num % 10];

    let ans = thousands + hundreds + tens + ones;

    return ans;
}


let number = 3549;
console.log(intToRoman(number));