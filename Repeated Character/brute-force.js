// Given a string consisting of lowercase english alphabets. Find the repeated 
// character present first in the string.

function repeat(str) {
    let n = str.length;
    for (let i = 0; i < n; i++) {  //TC=O(n)
        for (let j = i + 1; j < n; j++) {  //TC=O(n)
            if (str[i] == str[j]) {
              return str[i]
            }
        }
    }
    return "#";

}
let str = "geeksforgeeks";
console.log(repeat(str));

// TC=O(n*n)
// SC=O(1)

