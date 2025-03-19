// function EasyString(s) {
//     let n = s.length;
//     let str = s.toLowerCase();  //SC=O(n)
//     let res="";
//     for (let i = 0; i < n;) {  //TC=O(n)
//         let curr = str[i];
//         let count = 0;
//         while (curr == str[i] && i<n) {
//             count++;
//             i++;
//         }
//         let cntStr=count.toString();
//         res+= cntStr;
//         res+= curr;
//     }
//   return res;
// }s
// let s = "aaABBb";
// // output- 3a3b
// console.log(EasyString(s));

// // TC=O(n)
// // SC=O(n)

function countPrimes(n) {
    function isPrime(x) {
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                return false;
            }
        }
        return true
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            // console.log(i)
            count++
        }
    }
    return count;
};
let n = 10;
console.log(countPrimes(n));