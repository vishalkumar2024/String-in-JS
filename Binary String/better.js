// function binary(s) {
//     let count = 0;
//     let i = 0;
//     let j = 1;
//     while (j < s.length && i<s.length) {
//         if (s[i] == "1" && s[j] == "1") {
//             count++;
//             j++;
//         }
//         if (j == (s.length - 1)) {
//             while (i < s.length) {
//                 if (s[i] == "1" && s[j] == "1") {
//                     count++;
//                 }
//                 i++
//             }
//         }
//     }
//     return count;
// }
// let s = "01101";
// console.log(binary(s));

function binary(s) {
    let ones = 0;
    
    // Count the number of '1's in the string
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            ones++;
        }
    }

    // Apply the combination formula
    return (ones * (ones - 1)) / 2;
}

let s = "01101";
console.log(binary(s));  // Output: 6
