// Given a string s. The task is to find the first repeated character in it. We need to
//  find the character that occurs more than once and whose index of second occurrence is
//   smallest. s contains only lowercase letters.

function repeated(s) {
    let map = new Map()  //SC=O(n)
    for (let i = 0; i < s.length; i++) {  //TC=O(n)
        if (map.has(s[i])) {
            return s[i];
        }
        else {
            map.set(s[i]);
        }
    }
    return -1;
}
let s = "vishalthecoder"
console.log(repeated(s));

// TC=O(n)
// sc=O(n)