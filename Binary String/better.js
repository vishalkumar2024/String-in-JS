
function binary(s) {
    let ones = 0;
  
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            ones++;
        }
    }

    // Apply the combination formula
    return (ones * (ones - 1)) / 2;
}

let s = "01101";
console.log(binary(s));  

// TC=O(n)
// SC=O(1) 