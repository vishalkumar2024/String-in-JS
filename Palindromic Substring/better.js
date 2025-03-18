function palindromicSubstring(s) {
    let count = 0;
    let n = s.length;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < n && s[left] === s[right]) {
            if (right - left > 0) { // Count only substrings of length > 1
                count++;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < n; i++) {
        expandAroundCenter(i, i);     // Odd-length palindromes
        expandAroundCenter(i, i + 1); // Even-length palindromes
    }

    return count;
}

let s = "abaab";
console.log(palindromicSubstring(s)); 
