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


function roundToNearest(s) {
  let num = parseInt(s);
  let rem = num % 10;
  // console.log(rem)
  if (rem <= 5) {
    return (num - rem).toString()
  }
  else if (rem > 5) {
    return num + (10 - rem).toString()
  }
}
console.log(roundToNearest(29))


class Solution {
  roundToNearest(s) {
    let num = parseInt(s); // Convert string to number
    let rem = num % 10;

    if (rem <= 5) {
      return (num - rem).toString(); // Convert back to string
    } else {
      return (num + (10 - rem)).toString(); // Convert back to string
    }
  }
}