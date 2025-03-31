// Given a binary string S. The task is to count the number of substrings that 
// start and end with 1

function binary(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (s[i] == "1" && s[j] == "1" && i != j) {
                count++;
            }
        }
    }
    return count;
}
let s = "1111";
console.log(binary(s));

// TC=O(n*n)
// SC=O(1)