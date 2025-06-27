// leetcode 1910

function removeOccurrence(str, part) {
    let n = str.length;
    function remove(str, part) {
        return str.replace(part, "");
    }
    
    while (n > 0 && str.includes(part)) {
       str=  remove(str, part);
    }
    return str;
}

let str = "daabcbaabcbc";
let part = "abc";
// // Output: "dab";
console.log(removeOccurrence(str, part));

// TC=O(m*n) //  if str has M occurrences of part, the
//  loop will run M times.

//SC=O(1)